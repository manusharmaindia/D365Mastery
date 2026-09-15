---
title: "Understanding the Production Posting Profiles"
description: "In D365 F&O, production accounting follows a \"Physical\" vs. \"Financial\" update logic. Temporary \"Estimated\" entries are posted during the process and are f..."
pubDate: 2026-03-08
author: "Manu Sharma"
category: "Production Control"
tags: ["Production Control","Posting Profiles","WIP","RAF","Costing"]
readingTime: "8 min read"
featured: true
---

In D365 F&O, production accounting follows a "Physical" vs. "Financial" update logic. Temporary "Estimated" entries are posted during the process and are fully reversed and replaced by "Actual" entries when the production order is Ended.


1. Material and Route Consumption (The WIP Phase)
When you post a Picking List (Materials) or a Route Card (Labor/Machine time), D365 records the value of these resources in Work in Progress (WIP) accounts.


Material Consumption ($25,550,000): This represents the raw materials taken from the warehouse and moved into the production floor.

Route Consumption ($5,250,000): This is the cost of labor or machine hours applied.

Debit 150200 (WIP-Labor): Increases the value of the "unfinished" product.

Credit 600500 (Direct Labor Applied): This is an Absorption Account. It offsets the payroll expenses already recorded in the General Ledger, showing that the labor was "absorbed" into a product rather than just being a period expense.


2. Report as Finished (The Physical Phase)
The Report as Finished (RAF) stage signifies that the items are physically complete and sitting in the Finished Goods (FG) warehouse, even though the final "Financial" cost hasn't been locked in yet.


Debit 140200 (Finished Goods Inventory): Increases inventory at an Estimated cost (usually based on the BOM/Route estimation or standard cost).

Credit 150150 (Production WIP): Reduces the WIP account, moving the value out of "Work in Progress" and into "Finished Goods."

Amount $30,200,750: This is your total estimated manufactured cost (Materials + Labor + Indirects).

3. Indirect Costs ($200,750)
These are overheads (e.g., electricity, depreciation, or rent) calculated via the Costing Sheet.

The system uses Estimated indirect cost absorbed (600510) as an offset to pull these "invisible" costs into the product's value.

4. Production Control / Ending (The Settlement Phase)
The voucher PCV-14187 is the most critical. It occurs when you change the production order status to Ended. This process performs three main actions:

Reverses all Physical/Estimated entries: You see $30,200,750 being credited back out of FG Inventory to "clear the slate."

Clears WIP: All temporary WIP accounts (150150, 150200, 150250) are zeroed out.

Posts Final Financial Cost: The system calculates the Actual cost ($31,000,750).

Why is there a difference?

Estimated Cost: $30,200,750

Final Cost accounted: $31,000,750

Analysis: The $800,000 difference is a Production Variance. This happens if you consumed more material than planned, if labor took longer, or if the unit price of raw materials changed between the time you started and finished the order.




1. The Root Cause: Material Usage Variance
The entire $800,000 variance comes from a single raw material: MS-RM-101 (Cost Group: RM-RAM).

Estimated Consumption: 1,000 units

Realized Consumption: 1,050 units

Variance in Quantity: 50 units (Over-consumption)

Because the unit price for this item is $16,000 ($16,000,000 ÷ 1,000), the 50 extra units consumed resulted in an additional cost of $800,000. In Dynamics 365, this is classified as a Quantity Variance or Usage Variance. It suggests that the production process was less efficient than planned for this specific component—perhaps due to scrap, rework, or a calculation error in the BOM.

The Picking List is where the $800,000 "leakage" occurred. In D365 F&O, this journal records the physical movement of raw materials from the warehouse to WIP.
<div><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu6HCdVfD1uSQsAp86ylr7_trW0YNLoLqg3TIb8rnYanPzwvZy7WOBBuYAaEQ9pCzWkaXjQl-kDziokxMbmtCAa3b-mdsvgAdTpufieohhxIE1NU83_mYFTPp8B6QyU4BJ5yZ4dp7y2-QJ6lijzHU_GL2QIpSZegOIGBWqBPT_w7FRdfPX_y4GAZEa/s1967/644b5e2d-04c0-446c-a6e5-c585856739a8.png"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu6HCdVfD1uSQsAp86ylr7_trW0YNLoLqg3TIb8rnYanPzwvZy7WOBBuYAaEQ9pCzWkaXjQl-kDziokxMbmtCAa3b-mdsvgAdTpufieohhxIE1NU83_mYFTPp8B6QyU4BJ5yZ4dp7y2-QJ6lijzHU_GL2QIpSZegOIGBWqBPT_w7FRdfPX_y4GAZEa/s600/644b5e2d-04c0-446c-a6e5-c585856739a8.png" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /></a></div>



The Culprit (MS-RM-101): * The Plan: 1,000 units at $16,000/unit.

The Reality: 1,050 units were "picked" and posted.

Financial Impact: As soon as this journal was posted, the system debited WIP-Materials (150150) for $16.8M instead of the estimated $16M.

The Others: Items MS-RM-102 through MS-RM-105 were posted exactly at their estimated quantities.

2. Areas of Zero Variance
It is equally important to note the areas where the production was perfectly aligned with the estimate:

Other Materials: Items MS-RM-102 through MS-RM-105 had zero variance. The realized consumption and costs exactly matched the estimates.

Route/Labor Efficiency: * OP-ASS (Assembly): Took exactly the 50 hours estimated.

OP-PCK (Packing): Took exactly the 25 hours estimated.
Since the hours and the hourly rates matched, there was no Substitution or Efficiency Variance for labor.

Indirect Costs (Overheads):

Electricity and Machine Depreciation were "Output unit based." Since the final good quantity (500 pcs) matched the estimated quantity, these overheads were applied exactly as planned.

<div><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHaWW0ofFEKQ_-Cq0xMhBDbn8CYcgNXGRTUS-PR78OiYyvcWx3vGm1nYzHXxhTGX2Lx8Isd0lXpki6yWIEGFZz4o5vm1Bu6XsHeQLPkaaiyafoU2vlhjfCYU6mSQFRFNK7RKoK6VOEb9_08FaBjKv0bCYbk4cmHSRqCl95dm1YE_0g0NC85rn-9J2e/s1246/Screenshot%202026-03-09%20012401.png"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHaWW0ofFEKQ_-Cq0xMhBDbn8CYcgNXGRTUS-PR78OiYyvcWx3vGm1nYzHXxhTGX2Lx8Isd0lXpki6yWIEGFZz4o5vm1Bu6XsHeQLPkaaiyafoU2vlhjfCYU6mSQFRFNK7RKoK6VOEb9_08FaBjKv0bCYbk4cmHSRqCl95dm1YE_0g0NC85rn-9J2e/s400/Screenshot%202026-03-09%20012401.png" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /></a></div>



For auditors, having a clear, documented breakdown of why a $30.2M estimate became a $31M actual cost is crucial. Dynamics 365 Finance & Operations provides specific tools to extract this exact "Standard vs. Realized" comparison.

Here is how you can pull these details, offering both a quick on-screen analysis and a formal report for your audit trail.

Method 1: The Quick On-Screen View (Best for Ad-Hoc Analysis)
Before running a full report, you can view the exact breakdown directly on the production order. This is typically the fastest way to investigate a variance before answering auditor questions.

Navigate to Production control > Production orders > All production orders.

Select your specific production order (e.g., PRO-001648).

On the Action Pane, go to the Manage costs tab.

In the Costing group, click on View calculation details.

Select the Overview costing tab.

What you will see: This form provides a side-by-side grid of Estimated consumption/cost versus Realized consumption/cost. If you filter this grid by your specific Cost Group (e.g., RM-RAM), the $800,000 variance for the 50 extra units of MS-RM-101 will be immediately visible and highlighted.

Method 2: The "Cost Estimates and Costing" Report (Best for Auditors)
When auditors request a formal document showing the financial settlement of the production order, this is the standard report to generate.

Navigation:
Go to Production control > Inquiries and reports > Costing > Cost estimates and costing.

Recommended Parameter Setup:
When the report dialog opens, set the following parameters to ensure the data is clean and focused:

Records to include: Click Filter and set the Production field to your specific order number (PRO-001648).

Level of detail: Set to Item and resource (or Cost group if the auditors prefer to see it summarized by Material vs. Labor vs. Overhead).

Include estimated cost: Yes (This is your $30,200,750 baseline).

Include realized cost: Yes (This is your $31,000,750 actual).

Show variances: Yes (This forces the report to calculate and display the exact delta column).

How to Guide the Auditors Through the Report
When you hand this PDF to the auditors, you can direct their attention to how the system classifies the variance:

The Baseline: Show them the Estimated Cost column matching the $30,200,750 originally posted to Finished Goods (Account 140200) during the "Report as Finished" stage.

The Variance: Point them to the specific line for item MS-RM-101. The report will clearly show a Quantity Variance of 50 units, resulting in an unfavorable cost variance of $800,000.

The Settlement: Explain that voucher PCV-14187 (from your initial data) is the financial result of this exact report. The system took the total realized cost ($31,000,750) and used it to reverse the estimates and settle the Work in Progress (WIP) accounts to zero.

By providing both the posting profile extraction and this specific variance report, your auditors will have a complete, traceable map of the entire $31M production cycle.




<table>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Posting Type</th>
      <th>Account</th>
      <th>Account Name</th>
      <th>Nature of Transaction</th>
      <th>Setup Navigation Path</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Estimated cost of materials consumed</td>
      <td>140100</td>
      <td>Raw Materials Inventory</td>
      <td><strong>Physical Update:</strong> Reduces raw material inventory value at the Picking List stage.</td>
      <td>Inventory management > Setup > Posting > Posting > Production tab</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Estimated cost of materials consumed, WIP</td>
      <td>150150</td>
      <td>Production WIP-Materials</td>
      <td><strong>Physical Update:</strong> Offsets the raw material issue; holds the value in WIP.</td>
      <td>Inventory management > Setup > Posting > Posting > Production tab</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Estimated manufactured cost</td>
      <td>140200</td>
      <td>Finished Goods Inventory</td>
      <td><strong>Physical Update:</strong> Increases finished goods value at the Report as Finished (RAF) stage.</td>
      <td>Inventory management > Setup > Posting > Posting > Production tab</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Estimated manufactured cost, WIP</td>
      <td>150150</td>
      <td>Production WIP-Materials</td>
      <td><strong>Physical Update:</strong> Offsets the RAF entry; reduces the material value in WIP.</td>
      <td>Inventory management > Setup > Posting > Posting > Production tab</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Cost of materials consumed</td>
      <td>140100</td>
      <td>Raw Materials Inventory</td>
      <td><strong>Financial Update:</strong> Reverses the physical entry and posts the final actual material cost.</td>
      <td>Inventory management > Setup > Posting > Posting > Production tab</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Cost of materials consumed, WIP</td>
      <td>150150</td>
      <td>Production WIP-Materials</td>
      <td><strong>Financial Update:</strong> Reverses physical WIP and performs final financial settlement of materials.</td>
      <td>Inventory management > Setup > Posting > Posting > Production tab</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Manufactured cost</td>
      <td>140200</td>
      <td>Finished Goods Inventory</td>
      <td><strong>Financial Update:</strong> Reverses the RAF physical entry and posts the final actual cost of the product.</td>
      <td>Inventory management > Setup > Posting > Posting > Production tab</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Manufactured cost, WIP</td>
      <td>150150</td>
      <td>Production WIP-Materials</td>
      <td><strong>Financial Update:</strong> Final financial settlement of the product WIP value.</td>
      <td>Inventory management > Setup > Posting > Posting > Production tab</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Estimated cost of manufacturing consumed, WIP</td>
      <td>150200</td>
      <td>Production WIP-Labor</td>
      <td><strong>Physical Update:</strong> Records the labor/resource value in WIP at the Route Card stage.</td>
      <td>Production control > Setup > Routes > Cost categories (Ledger tab)</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Estimated manufacturing cost absorbed</td>
      <td>600500</td>
      <td>Direct Labor Applied</td>
      <td><strong>Physical Update:</strong> Offset account that "absorbs" labor costs into the product value (P&L).</td>
      <td>Production control > Setup > Routes > Cost categories (Ledger tab)</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Estimated cost of indirect cost consumed, WIP</td>
      <td>150250</td>
      <td>Production WIP-Overhead</td>
      <td><strong>Physical Update:</strong> Records overheads (e.g., electricity) in WIP via the Costing Sheet.</td>
      <td>Inventory management > Setup > Costing > Costing sheets (Node setup)</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Estimated indirect cost absorbed</td>
      <td>600510</td>
      <td>Absorbed Machine Depreciation Cost</td>
      <td><strong>Physical Update:</strong> Offset account that "absorbs" overhead costs into the product value (P&L).</td>
      <td>Inventory management > Setup > Costing > Costing sheets (Node setup)</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Cost of manufacturing consumed, WIP</td>
      <td>150100</td>
      <td>Production WIP-Clearing</td>
      <td><strong>Financial Update:</strong> Clears the temporary labor WIP and settles it into the finished product.</td>
      <td>Production control > Setup > Routes > Cost categories (Ledger tab)</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Manufacturing cost absorbed</td>
      <td>600500</td>
      <td>Direct Labor Applied</td>
      <td><strong>Financial Update:</strong> Reverses physical absorption and records the final actual labor absorption.</td>
      <td>Production control > Setup > Routes > Cost categories (Ledger tab)</td>
    </tr>
    <tr>
      <td>15</td>
      <td>Cost of indirect cost consumed, WIP</td>
      <td>150100</td>
      <td>Production WIP-Clearing</td>
      <td><strong>Financial Update:</strong> Clears the temporary overhead WIP and settles it into the finished product.</td>
      <td>Inventory management > Setup > Costing > Costing sheets (Node setup)</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Indirect cost absorbed</td>
      <td>600510</td>
      <td>Absorbed Machine Depreciation Cost</td>
      <td><strong>Financial Update:</strong> Reverses physical absorption and records final actual overhead absorption.</td>
      <td>Inventory management > Setup > Costing > Costing sheets (Node setup)</td>
    </tr>
  </tbody>
</table>
