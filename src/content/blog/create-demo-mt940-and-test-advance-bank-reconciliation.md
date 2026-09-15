---
title: "Create Demo MT940 and Test Advance Bank Reconciliation"
description: "Decoding the MT940 Bank Statement for D365 Advanced Bank Reconciliation While ISO 20022 CAMT.053 is rapidly becoming the gold standard for global banking c..."
pubDate: 2026-04-12
author: "Manu Sharma"
category: "Cash and Bank"
tags: ["Cash and Bank","Bank Reconciliation","MT940","CAMT.053","ISO 20022"]
readingTime: "5 min read"
featured: false
---

<h1>Decoding the MT940 Bank Statement for D365 Advanced Bank Reconciliation</h1>
<p>While ISO 20022 CAMT.053 is rapidly becoming the gold standard for global banking communication, the classic <strong>SWIFT MT940</strong> format remains a powerful and ubiquitous staple for automated bank reconciliation. </p><p>Understanding how to read an MT940 file—and how Dynamics 365 Finance interprets its structured tags—is an essential skill for any financial implementation team.</p>
<p>Unlike the highly nested XML structure of CAMT.053, MT940 is a "flat-file" standard established by SWIFT. It relies on sequential alphanumeric tags to denote fields. If a bank omits a mandatory tag or misformats a string, the D365 import process will likely fail. </p>
<p>Let's break down the core architecture of an MT940 statement and highlight the critical fields required for a seamless D365 Finance integration.</p>
<hr />
<h3>The Anatomy of an MT940 Statement</h3>
<p>An MT940 file systematically structures its data into specific blocks marked by tags. A tag starts with a colon, followed by the tag number, and ends with another colon (e.g., <code>:25:</code>).</p>
<p>Here are the most critical tags you need to understand when configuring your D365 Bank Account Master and Advanced Bank Reconciliation Matching Rules:</p>
<h4>1. Tag <code>:20:</code> - Transaction Reference Number (TRN)</h4>
<ul>
<li><strong>What it is:</strong> The unique reference number assigned to the statement message by the sender.</li>
<li><strong>D365 Impact:</strong> D365 uses this for internal tracking and duplicate prevention. If an MT940 file is imported twice, D365 checks this reference, alongside the statement date and number, to block duplicate imports.</li>
</ul>
<h4>2. Tag <code>:25:</code> - Account Identification [CRITICAL FOR MATCHING]</h4>
<ul>
<li><strong>What it is:</strong> This identifies your bank account. It is usually represented as the IBAN or the standard domestic bank account number.</li>
<li><strong>D365 Impact:</strong> This is arguably the most crucial tag for the import process. The standard D365 MT940 parser looks at Tag <code>:25:</code> to match the statement block to the internal D365 Bank Account. </li>
<li><strong>The Rule:</strong> The <code>IBAN</code> field or the <code>Bank account number</code> field on your D365 Bank Account Master must be an <strong>exact alphanumeric match</strong> to the contents of Tag <code>:25:</code>.</li>
</ul>
<h4>3. Tag <code>:28C:</code> - Statement Number / Sequence Number</h4>
<ul>
<li><strong>What it is:</strong> A progressive number that indicates the chronological sequence of the statements (e.g., <code>15/1</code> indicating Statement 15, page 1).</li>
<li><strong>D365 Impact:</strong> Helps D365 chronologically sequence the statement headers in the Advanced Bank Reconciliation worksheet.</li>
</ul>
<h4>4. Tags <code>:60F:</code> / <code>:60M:</code> - Opening Balance</h4>
<ul>
<li><strong>What it is:</strong> The opening balance of the account at the start of the statement period. <code>F</code> stands for First/Opening, <code>M</code> indicates an intermediate balance.</li>
<li><strong>Structure:</strong> It packs multiple data points into a single string. It starts with <code>C</code> (Credit) or <code>D</code> (Debit), followed by the Date (<code>YYMMDD</code>), Currency (<code>EUR</code>), and Amount (<code>15000,00</code>).</li>
<li><strong>D365 Impact:</strong> D365 uses the currency defined here to validate against the D365 Bank Account Master base currency. If the currencies clash, the import will be blocked. The opening balance is also verified mathematically against the sum of the transactions to authenticate the file.</li>
</ul>
<h4>5. Tag <code>:61:</code> - Statement Line (The Transaction details) [CRITICAL FOR MATCHING]</h4>
<ul>
<li><strong>What it is:</strong> The meat of the file. Every single financial transaction has its own Tag <code>:61:</code>. </li>
<li><strong>Structure Example:</strong> <code>61:2603310331CR1500,00NMSCNONREF</code></li>
<li><strong>Breakdown:</strong> Let's tear this string apart because it drives your D365 transaction lines:<ul>
<li><code>260331</code>: Value date (YYMMDD) - <em>March 31, 2026</em></li>
<li><code>0331</code>: Entry date (MMDD)</li>
<li><code>C</code> / <code>D</code> / <code>CR</code> / <code>RC</code>: Credit or Debit indicators (<code>R</code> usually denotes a Reversal). This dictates whether D365 writes a positive or negative amount.</li>
<li><code>1500,00</code>: Transaction Amount.</li>
<li><code>NMSC</code>: SWIFT Transaction Type Identifier Code (e.g., <code>NMSC</code> for Misc, <code>NTRF</code> for Transfer, <code>NCHG</code> for Charges).</li>
<li><code>NONREF</code>: Bank Reference.</li>
</ul>
</li>
<li><strong>D365 Impact:</strong> D365 Matching Rules heavily leverage the SWIFT Transaction Code (the 4 letters like <code>NMSC</code>). You can instruct D365: <em>"If the line is a Debit and the Bank transaction code is <code>NCHG</code>, bypass the subledger and automatically post this to the Bank Fees General Ledger account."</em></li>
</ul>
<h4>6. Tag <code>:86:</code> - Information to Account Owner [CRITICAL FOR CLEARING]</h4>
<ul>
<li><strong>What it is:</strong> Directly follows a Tag <code>:61:</code> line. This is the <strong>Remittance Information</strong> block. It contains unformatted metadata regarding who paid you and why, like Invoice Numbers, Vendor Names, or payment descriptions.</li>
<li><strong>D365 Impact:</strong> This is the playground for D365 Advanced Bank Reconciliation's more complex features. Because the tag often contains a massive, unstructured string of text, you utilize <strong>Matching Rules</strong> to scan the <code>:86:</code> tag. If a customer paid Invoice <code>INV-90921</code>, the text <code>INV-90921</code> will live inside this tag. D365 searches this block, pulls the invoice ID, and uses it to auto-settle the open Accounts Receivable balance.</li>
</ul>
<h4>7. Tags <code>:62F:</code> / <code>:62M:</code> - Closing Balance</h4>
<ul>
<li><strong>What it is:</strong> The ending check-figure. Functions identically to Tag <code>:60F:</code>.</li>
<li><strong>D365 Impact:</strong> D365 validates the imported data by taking the Opening Balance (<code>:60F:</code>), netting all the Tag <code>:61:</code> lines, and verifying that the final number perfectly matches Tag <code>:62F:</code>. If it's off by even a penny, the statement is typically flagged as structurally invalid and won't reconcile.</li>
</ul>
<hr />
<h3>Summary</h3>
<p>For D365 implementations, the MT940 format thrives in its standardized rigidity. Ensure that the Account Identification (Tag <code>:25:</code>) perfectly aligns with the IBAN in D365, and heavily utilize the SWIFT Action codes in Tag <code>:61:</code> and the dense text inside Tag <code>:86:</code> to automate your daily transaction matching.</p>
