---
title: "Modern Bank Reconciliation - End to End Automation from Bank SFTP to D365 Reconciliation"
description: "In version 10.0.36 Microsoft released feature: Automatic importing bank statement from SharePoint folder. https://learn.microsoft.com/en-us/dynamics365/rel..."
pubDate: 2026-04-06
author: "Manu Sharma"
category: "Cash and Bank"
tags: ["Cash and Bank","Bank Reconciliation","MT940","CAMT.053","ISO 20022"]
readingTime: "7 min read"
featured: false
---

<p>In version 10.0.36 Microsoft released feature: Automatic
importing bank statement from SharePoint folder. <a href="https://learn.microsoft.com/en-us/dynamics365/release-plan/2023wave2/finance-supply-chain/dynamics365-finance/automatic-bank-statement-importing"><b>https://learn.microsoft.com/en-us/dynamics365/release-plan/2023wave2/finance-supply-chain/dynamics365-finance/automatic-bank-statement-importing</b></a><o:p></o:p></p>

<p>Reference - <o:p></o:p></p>

<p><a href="https://learn.microsoft.com/en-us/dynamics365/finance/accounts-payable/import-bai2-er?source=recommendations"><b>Set
up advanced bank reconciliation import by using Electronic reporting - Finance
| Dynamics 365 | Microsoft Learn</b></a><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shapetype
 id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t"
 path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f">
 <v:stroke join/>
 <v:formulas>
  <v:f eqn="if lineDrawn pixelLineWidth 0"/>
  <v:f eqn="sum @0 1 0"/>
  <v:f eqn="sum 0 0 @1"/>
  <v:f eqn="prod @2 1 2"/>
  <v:f eqn="prod @3 21600 pixelWidth"/>
  <v:f eqn="prod @3 21600 pixelHeight"/>
  <v:f eqn="sum @0 0 1"/>
  <v:f eqn="prod @6 1 2"/>
  <v:f eqn="prod @7 21600 pixelWidth"/>
  <v:f eqn="sum @8 21600 0"/>
  <v:f eqn="prod @7 21600 pixelHeight"/>
  <v:f eqn="sum @10 21600 0"/>
 </v:formulas>
 <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>
 <o:lock v:ext="edit" aspectratio="t"/>
</v:shapetype><v:shape id="Picture_x0020_72" o:spid="_x0000_i1060" type="#_x0000_t75"
 style='width:468pt;height:276.75pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image001.gif"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEi8Mnvo9WmCwNr1daZqBoZZKbgQEa9f4HcPrH44spQRYjyp-an0VaK-4eG84lOX5cZcwy3HnA0Si7mO1c6X_n6qULy4fkeyQ7AuCf4wOkw41pHnReo-Qj4k6o9hP1uNVOsxDYSD4AkAMhJXV7pfzNc24SQtUCTgVTprErWhf5L57qDdRancyXZm9wAj" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><b>Description: Touchless Bank Reconciliation Process</b><o:p></o:p></p>

<ul type="disc">
 <li><b>Automated
     Delivery:</b> The bank sends an email with the statement attachment to a
     dedicated mailbox / SFTP.<o:p></o:p></li>
 <li><b>Power
     Automate Routing:</b> A flow automatically detects the email / SFTP,
     extracts the file, and saves it to a pre-defined <b>folder</b> in
     SharePoint.<o:p></o:p></li>
 <li><b>Batch
     Import:</b> A recurring batch job in Dynamics 365 "pulls" the
     file from the SharePoint folder into the system at set intervals (3min, 10
     min or even a day as per user requirement).<o:p></o:p></li>
 <li><b>Touchless
     Execution:</b> By enabling the <b>"Reconcile after import"</b>
     option, the system automatically validates the statement, creates a
     worksheet, and runs matching rules, completing the reconciliation without
     manual intervention.<o:p></o:p></li>
</ul>

<p><o:p> </o:p></p>

<p>Below is Complete Flow<o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_71" o:spid="_x0000_i1059" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image003.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgQAldp8OJFf93rtnVQj3vdyCJtLNoJ0AEL6hbkdT7VcpLiMSGMOtGBVqnIJgd9ZyAk7Em-0K2DxXzj3oY408EFCV11kZzRRvSbnSyo5D4HHQuxDL3O883O-zgujhBltFK4b99Kn-xIyGi3Pi_7RIpoiqtnl9o62WUVeqmz0bDD4pcs6UMkpcfinmXh" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_70" o:spid="_x0000_i1058" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image005.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEjJTZDhlj9eR5f-j9ZxVBAGA-dwlEgWU9Zuf61GrOKRJG4WE8-xyU55O9pNSVxURu2-tX4jZbibIACAvI_CGY2qhbW4CVai1-HRJaGdtoOkhVCw2HR3ksKmbmEtX2DdTnnl3IyhyYa7Ur0o5zVRNsyHkJ6yUGWzDN1XarkY9lvPC1ievnXdhB7w9EZe" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p>SharePoint and Power Automate enable touchless bank
reconciliation by automating the end-to-end process of receiving, importing,
and matching bank statements within Dynamics 365 Finance. This integration
eliminates the need for manual file uploads and initial reconciliation steps.<o:p></o:p></p>

<p><b>The Role of Power Automate</b><o:p></o:p></p>

<p>• Power Automate acts as the delivery mechanism that brings
bank statements into the system's reach.<o:p></o:p></p>

<p>• Triggering the Flow: A flow is typically configured to
monitor a dedicated treasury mailbox.<o:p></o:p></p>

<p>• Automatic File Retrieval: When a new email arrives—for
instance, one with a subject line containing "bank statement" and an
attachment—Power Automate automatically picks up the file.<o:p></o:p></p>

<p>• Transfer to SharePoint: The flow then saves that
attachment directly into a specific folder in SharePoint, such as a "<b>Main</b>"
folder designated for new imports.<o:p></o:p></p>

<p><b>Achieving a "Touchless" Process</b><o:p></o:p></p>

<p>• The transition from a simple file import to a
"touchless" experience is completed through several automated steps
within Dynamics 365:<o:p></o:p></p>

<p>• Automatic Batch Import: Instead of a manual
"push," Dynamics 365 uses a batch job that runs at set intervals
(e.g., every few minutes) to "pull" new statements from the
SharePoint folder into the Erp.<o:p></o:p></p>

<p>• Reconcile After Import: By enabling the "Reconcile
after import" option, the system automatically validates the statement,
creates a new reconciliation worksheet, and runs the default matching rules as
soon as the file is uploaded.<o:p></o:p></p>

<p>• Advanced Matching Rules: The system uses enhanced matching
rules—such as one-to-many matching, clearing of bridging transactions, and
automatic voucher generation—to reconcile lines without human intervention.<o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_69" o:spid="_x0000_i1057" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image007.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEh-v3961SOpAO2H2dFAEcM4HXzV2zEcoh0FMfSitQq74VsIekTvUwdkA1QHb8XOS8XsDpMlwqeQVqrNjOvy0NJegxTNmjK8Wt9Ck60bw_iXr6sSRfpwRYhMYV6u_XTMZH5c0NS1SvS9GUdUqtcnfJmufv46GjXwE8a2Po9llD2TTTrI8lBqeCE96p5U" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><b>7. Power Automate<o:p></o:p></b></p>

<p>Using power automate to move files from email to SharePoint
folder:<o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_68" o:spid="_x0000_i1056" type="#_x0000_t75" style='width:468pt;
 height:310.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image009.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgOHu31ptlDF40lsfLo70iIH_ZxHsY_dVgx7FSJD1QziDCxzZ4lo8OFOf7aikabMkoBtA5np0tWEUMEkkR3uREPcnBauLm0dsLFcc1lYIhA90of8KmbFMpUYbXTX3vUxjGnyfpYDkiITWCfi7El7SnH5_DaJzK51kpPpPqzLx6H8pqvJDBPemwH7b2R" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p>You can refer to the link: <a href="https://powerautomate.microsoft.com/en-US/templates/details/f7a46809e53c42108034e56acf83bb79/save-my-email-attachments-to-a-sharepoint-document-library/"><b>Save
my email attachments to a SharePoint document library | Microsoft Power
Automate.</b></a><o:p></o:p></p>

<ul type="disc">
 <li><b>Check
     from email address</b>: set the from email (Email of Bank):<o:p></o:p></li>
</ul>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_67" o:spid="_x0000_i1055" type="#_x0000_t75" style='width:468pt;
 height:196.9pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image011.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEj15PTElqaU45o6-YsdKf8ux-p_quRJC-89UaCDzO1-c-A6q_QdcDew4zgxZDowsVFie6BcXMdaF9sCwBjYVqU9QtI254JrcFMBAZPFc0qqd9k1dRq47tGplgq2wk0HM8MTwHGqk0G_agJXDUWgl1kzwOAVZnGlk2XUN0v0nRDeKu0-IipM3RC0KJGo" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<ul type="disc">
 <li>In <b>Create
     file</b> step, set the SharePoint link:<o:p></o:p></li>
</ul>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_66" o:spid="_x0000_i1054" type="#_x0000_t75" style='width:468pt;
 height:300.4pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image013.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEiiiOLJ3ZLdCGLwJPguOsT6c0N1fJVW_v3ws0rdChz1VRLHx-CLkfUNS1bPomBKwmtFz826yUo1DmILEY0mfDYOpK8RO29RMGMA3iMiOPkWLXnFJ4zFez2xAU1N9A287TjjtK82MLk-dYOR4jtc-Ktk99A5I-JDKvA10ZyeQoRaxQIvDg6lHAgCOTjH" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><b>Save</b> and <b>test</b> to make sure that Flow is run
successfully.<o:p></o:p></p>

<p><b>SharePoint folder<o:p></o:p></b></p>

<p>Create 4 folders in SharePoint to handle this process flow
as below<b>:</b><o:p></o:p></p>

<ol start="1" type="1">
 <li>Main<o:p></o:p></li>
 <li>Imported<o:p></o:p></li>
 <li>Imported
     with Warning<o:p></o:p></li>
 <li>Failed<o:p></o:p></li>
</ol>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_65" o:spid="_x0000_i1053" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image015.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEhnbUVS2o6oBLBqGh0JC8xNKOY29AR7uoxczxMRjhFFGwrfS56G2zfiHldZz8v-_UQBdPIO3JSYO3vdEGsYQd7d3XTMo_YZn80MTf4B466xEEojiOf1RzEaCN3aSD2F9AisxJO16-4NLkuJUTV6cnK02pToJV62u52paNtTB77aty1kP_Dm1hGF5f2p" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><b>2. Configure the connection between D365 and SharePoint<o:p></o:p></b></p>

<p>Path: <b><i>Go to Organization administration > Document
management > Document management parameters.</i></b><o:p></o:p></p>

<p>Enter the SharePoint link in <b>Default SharePoint server</b>
field:<o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_64" o:spid="_x0000_i1052" type="#_x0000_t75" style='width:468pt;
 height:241.15pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image017.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEjbaXoIO_rNgaLPCErcBUROOqi3MRPyFvzdCXvE8jS6yM7yLX6uLqh6AYEaaqAliSC5fhLCtwhMUQx3cuuyNoWA6tGTxQxUmSYrwylsIwCGAGAQgsQDvIzExB98m9B0baLkHyY57ZaYUuA8Ef3rgAiL-ASjADM0cTrh9I5HPEkCFGemzZK8sFwF-mBc" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p>Click <b>Test SharePoint connection</b> to make sure that it
is connected successfully.<o:p></o:p></p>

<p>Now there is Catch, we need to test the interactive session
as well as the batch session<o:p></o:p></p>

<ol start="1" type="1">
 <li>Interactive
     session<o:p></o:p></li>
 <li>Batch
     session<o:p></o:p></li>
</ol>

<p>Note: - <a href="https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/organization-administration/configure-document-management#one-time-registration-process"><b>Configure
document management - Finance & Operations | Dynamics 365 | Microsoft Learn</b></a><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><b>3. Configure Document types link to the SharePoint folder<o:p></o:p></b></p>

<p>Path: <b><i>Go to Organization administration > Document
management > Document types.</i></b><o:p></o:p></p>

<p>Create 2 document types corresponding with 2 folders in
SharePoint:<o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_63" o:spid="_x0000_i1051" type="#_x0000_t75" style='width:468pt;
 height:208.15pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image019.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEjcNYD4yZhwu2sxecxkhhzNiXszCYb3ZOsOTkMNgOL8uvsuc-d8oFjdPzAtGgS-xqst1hHq00aUx0QEmTErOWk5ymmmaXW6v0lQmm5baz2PfFNKuXdEQKmNqYLjlF3K2bnjey2nSxfyHiHAUveepJ9jChN0l2E7-uAwyPqM-cHUlNpcjqIL2MbQ7nm7" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p>In the <b>SharePoint Address</b> field, click <b>Edit</b> to
choose the folder:<o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_62" o:spid="_x0000_i1050" type="#_x0000_t75" style='width:468pt;
 height:271.9pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image021.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEiy6GBi23vFcrXFvYfYhRybrmjRfPPIQ5ExIEaKHW8lRUkzJ1dXhuJigruIRIbJuz0iIJm6vWl7cvGmudfO_CSEQrxQyWhW7lw2HiNYkoqE-Bs8Fwm4tTwmz5BchU5BEVVjVc7ugSGG0edCjbVLAbBlefQtChyvMkEYlILOqTXwXJp8b3t5WXUYMz6M" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p>Now we have to create 4 document types:<o:p></o:p></p>

<ul type="disc">
 <li><b>BRS_Main:
     </b>link to Main folder in SharePoint.<o:p></o:p></li>
 <li><b>BRS_Imported</b>:
     link to Imported folder in SharePoint.<o:p></o:p></li>
 <li><b>BRS_Imported
     with Warning</b>: link to Imported with Warning folder in SharePoint.<o:p></o:p></li>
 <li><b>BRS_Fail</b>:
     link to Fail folder in SharePoint.<o:p></o:p></li>
</ul>

<p><o:p> </o:p></p>

<p>Note: - We faced issue when doing this activity manually
from the front end, so we used data management.<o:p></o:p></p>

<p>We create<o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_61" o:spid="_x0000_i1049" type="#_x0000_t75" style='width:468pt;
 height:200.65pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image023.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEhdpeZQQ0l2X56yKskVzpuqyv7syimuXrXreuBmpX6bha3LpyRfhoTJHVBijyN4p7oKEQX90fD-Fkt97_pALXLV6365qjLIQAS4E2_a3E6epvEBmN7JQ5HHDtwHb-LGP46R7g-NCt9NZKc4_NFQjAlC0T0rsjebY7vsFletf5gJjDI_jI4ENv-jNSYM" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_60" o:spid="_x0000_i1048" type="#_x0000_t75" style='width:468pt;
 height:133.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image025.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEiOrSov8nEFLYpZgdylglXe4iaC3Q9qFvww87lD4rrYsec8N1xdehc7JHqIR7jQoaY6z1crIj6cDTZFGyvaz-RhlcR1ETyYFfn8HpTsAwpJtSSAYuiOFXNq-5zcCjLauthuH5yVOXamPoofaY2yL4foozI7LqDrMkD-JPSuUu1eqryW6eXRjQRmZtzs" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><b>4. Import Electronic Reporting Configuration from
Dataverse Repository for Advance bank reconciliation formats<o:p></o:p></b></p>

<p>Path: <b>Go to Organization administration > Workspaces
> Electronic reporting.</b><o:p></o:p></p>

<p>Click <b>Repositories</b> in <b>Microsoft provider</b> ->
Open -> <o:p></o:p></p>

<p>Import the following 4 files 3 are related to Reconciliation
formats and 1 is related to Mapping to destination<o:p></o:p></p>

<p>1ABR bank statement Mapping to destination & ABR MT940
format (Choose ABR because It is the latest format):<o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_59" o:spid="_x0000_i1047" type="#_x0000_t75" style='width:468pt;
 height:289.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image027.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgq_njE5MOSKey7AxROBGPe_iV4ejXjnqiTJk2iLbaIB5OoWZ6lW5CkQV1GYAbfv-EbNid3ofuWP0oUecO92ZuaAwiplZgLyAfy5TPuf6HeN-zFTiBqcx3edt7v24DYOJ_Q0s3Ju_hY_sPrKROQ64_jgLP14BU33-gzz5LpJ9MM3GvOmRsdsnjQdD50" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p>After imported successfully, you can check the format in the
Reporting configuration:<o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_58" o:spid="_x0000_i1046" type="#_x0000_t75" style='width:468pt;
 height:5in;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image029.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEiIuhK1vwqLOU9hFWh4Hyysc40n9HXX2hwxDxbBjrqGojpXBK4DN5mcpw9mvDJMUW2IEjHM5gJDsT9iL7yYvpa3uvRyhfsljj_DTJbT74TQgj78E4dbIHEdQdb7IeW7QOM-zqO9d4fivT1rVWoN0oOu6Tf-3CWfiM6_49yrM74dgmFgmF3ceg0gmk4r" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_57" o:spid="_x0000_i1045" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image031.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEj7zvUtFVBTNLCwS0Mba7fDfMB-oLryGT0ft8n3gEf-TTWeYUIWfo6vQ2YwyK44ZKqdmdfIVn35WS2W-isVJcAk9Y3Lg8xpCcFKjtNrr5jYES2JZGlYdHzAeOOjmctun90gIzc3EBAqKxh4kl_v-sBFgL_OS7CRWmyKN629871g1A9LX-j8SHJ6NRyP" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><b>5. Configure Bank account<o:p></o:p></b></p>

<p>Path: <b>Go to Cash and bank management > Bank accounts
> Bank accounts.</b><o:p></o:p></p>

<p>In the <b>Reconciliation FastTab</b>, set the parameters as
the screenshot:<o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_56" o:spid="_x0000_i1044" type="#_x0000_t75" style='width:468pt;
 height:190.15pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image033.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEj9Y_nV0GSEK5onltOtLnXl6AzMX13AMvsqvmOciSksEMmLikLbtzb0C-RlMWVWHGwDTBkv82ND2og0HFTJS13XqiNEjHC-2vlDmptmAvbxvY4C6CQzmhwdM1Q58fKrZZmD9ntgLj6Th1PDKEsTrqLDpKP74PXnOOE6ptk1uL7FB-CWpZS46vrB0LU6" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<ul type="disc">
 <li><b>Statement
     format</b>: Create a statement format link to bank statement format from
     electronic reporting.<o:p></o:p></li>
 <li><b>Reverse
     debit credit mark</b>: This option displays correctly Debit/ Credit side
     between D365 and bank statement file.<o:p></o:p></li>
 <li><b>Reconcile
     after import</b>: If select = yes, the bank statement will be reconciled
     automatically based on value in <b>Default matching rules set </b>field
     after import successfully.<o:p></o:p></li>
</ul>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_55" o:spid="_x0000_i1043" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image035.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgvGK1HMfLDaJfbDmSDCYmk5vkt-KAMrPAcquoQeAL4hT11nyfajksDjPlUSQ96_Xh_c-lK75BGQr8VDsswiDXV79ZYNF9HWGamVDPG0v8yAiKnC3lvJ6jH4RuRtauxpfPGIo6T4xMUJyZ3KuKV5IBTKTyQkxPThs25H0uck7gl210OEYO32yBtjLgg" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_54" o:spid="_x0000_i1042" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image037.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgerhPzamOpwIddqiMbfOkKTzJNgZt0dUlisCtfJWzRdkJc-WsR2MVvH45c08MNqKWaGxu7oNhM4RXU2zQOYuMqPs3K_v4acruEPZPE6sqhVxDb3YvjcB4sB6dxUf3VwbflZl992zDKHThZaDM4WKBxz00OsS8Y5ZQIV72nSWsn9mWg2mtCZAewozQC" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><b>6. Electronic reporting source<o:p></o:p></b></p>

<p>Path: Go to <b>Organization administration > Electronic
reporting > Electronic reporting source.</b><o:p></o:p></p>

<p>It is used to configure the mapping between bank statement
format and SharePoint folder where placing bank statements and Bank statement
archiving:<o:p></o:p></p>

<ul type="disc">
 <li><b>Name</b>:
     This is a text field. Type a value.<o:p></o:p></li>
 <li><b>File
     name mask</b>: extension of a file in SharePoint's folder:<o:p></o:p></li>
</ul>

<p>*.txt: filter only files that have the .txt extension.<o:p></o:p></p>

<p>If it is blank: Read all files in the folder.<o:p></o:p></p>

<p>In <b>Settings</b>:<o:p></o:p></p>

<ul type="disc">
 <li><b>Enable</b>:
     select = Yes<o:p></o:p></li>
 <li><b>Document
     type for input sources</b>: Select a document type for Bank statement file<o:p></o:p></li>
 <li><b>Document
     type for imported files:</b> Select a document type for Archived Bank
     statement.<o:p></o:p></li>
</ul>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_53" o:spid="_x0000_i1041" type="#_x0000_t75" style='width:468pt;
 height:331.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image039.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEg08ZwTJ1Dk_SE7pf1IQh4CKx87HjBGdd5LdaVEDC88Su4g84PQJ1y2iZekrOp9csqVjCZ5mTwt5G9Ih8ZrNyJcbinHfwb70CjxhwaXWZsn3Lkqp41NVdICWNIin02_vxHxvnC3PpK5v_bl3QxjdDKLDCmlxBdXMGvdpt3kHc9y3MghzK1lEu0ryV1x" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_52" o:spid="_x0000_i1040" type="#_x0000_t75" style='width:468pt;
 height:245.25pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image041.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgJDj8mqlzvSJqr-yDlEj7g9Ud3I9VK9V2YC3AC8YA-1lXBBlhOsfBi2bOrDXtSjHtdsAAqrexMNiXMijuA05ruzSgVu1msufRxsWMsCrbR0A7ohqmPI7U0DAXM3txK8uW5J23CoKjpgXe2RVhDbeM3sKR4DpzUdeZ4u1bFvJffgNMcqgHrrCfLAVTZ" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><b>8. Setup Batch job to get the file from SharePoint and
import bank statements automatically<o:p></o:p></b></p>

<p><i>Path: Go to Cash and bank management > Bank statement
reconciliation > Bank statements.</i><o:p></o:p></p>

<p>Click <b>Import statement</b> and set the parameter as the
screenshot:<o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_51" o:spid="_x0000_i1039" type="#_x0000_t75" style='width:468pt;
 height:245.65pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image043.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEhI_eqiwv-PNVp5bBWqldBBUoMk3jsT4kQ1E9iDJ2Wb63UpwHWE9VLNYaeeHijG8SKaZhox2yUHUwLk9P1ZR-hfRj3N4qbCtOB4MfMY8uDwxNKbrkOQ_j8lNq1eMDysTchaY2acFaDY99QjSZNxMWcGEPe8n1U2a5S2UhHOvZoT9k7y8mBg0yQd7orx" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<ul type="disc">
 <li>Select
     <b>Batch processing = Yes</b><o:p></o:p></li>
 <li>Click<b>
     Recurring </b>to set up the recurrence.<o:p></o:p></li>
</ul>

<p>The configuration is completed. Now you can try to send an
email with the attached bank statement file (MT940) from the email setup in
Power Automate and see the result.<o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_50" o:spid="_x0000_i1038" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image037.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEjmfbXeHvHT5UXoMGSTUX1Jw-TxDfHKzX-O7e4V30-mqskGIysh-fVVdGi1P6h--V87vIYaK9_8oad_c3d5eU4sPc7yfaRwV2mOapMBqCekPkrbQ834rk_8lVs7VhZxXNvUAlbodTiAgbExj2zLke1y3zSdbWMxty5izNdLEU8F1JjBBejLyDA_wzd5" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_49" o:spid="_x0000_i1037" type="#_x0000_t75" style='width:468pt;
 height:430.5pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image046.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEix0OT7XbtstzRGf_Y4PNZYVDil22H25tcsKEvlbHurtR3tf6iyBDfApzoB5l8bpXv4zSJYSYxt1OWHuJRGtqXTQ_CEJoVVJywIJDgnNumRpKuJ_9gXpC4eVJLmzWhONSEK-Gv5SOtJOBJmQv0vcK3d17PAtN34RZv4sJ4_UwhVaImWbGhao8MNlb7g" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><b>Process Flow</b><o:p></o:p></p>

<ul type="disc">
 <li>When
     the bank sends an email with the attached bank statement file (MT940) to
     the specific email, Power Automate will run and move the file to the
     SharePoint folder:<o:p></o:p></li>
</ul>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_48" o:spid="_x0000_i1036" type="#_x0000_t75" style='width:468pt;
 height:604.15pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image048.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgCphKjK0ReLc0GlUL_YoVVcQeKCNDR_cnWZXEg3xQPBXWr2a5FoPN8MfIEcHCJYWkntvz2SXnv5enIbfoP179OeylUY7Aqdd5RxYIHCU3UsoF81tquWTnxQU1Utbp9oc8tWc5kx6PAC1ZFdJmOzpxDVcm9_7jf4b_yqBDut8a1DUlz3lLWjEhAQP-B" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<ul type="disc">
 <li>Batch
     job run to get the file and import it to D365. Check the result in the
     history log:<o:p></o:p></li>
</ul>

<p>Path: <b><i>Go to Organization administration >
Electronic reporting > File states for the sources.</i></b><o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_47" o:spid="_x0000_i1035" type="#_x0000_t75" style='width:468pt;
 height:229.9pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image050.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgCxiTurs_ldPFMu7tD-63GC04LEQtZRIoO6gWQ8CiZlg2OyCkXqZLtcgJULlEK4RY1GHQnMvaYloK_mFCesxITCMRfMKeBJW5pAJ7Mm06vG8tIaa9eun3Npv_A0mDR__DPKNys2R92xuDMlruqWIW0fi1zjvRaokJKnOOgIERilPNR_WYA4EthrVjr" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<ul type="disc">
 <li>In
     the <b>SharePoint </b>folder, the bank statement file has been moved to <b>Archiving</b>
     folder:<o:p></o:p></li>
</ul>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_46" o:spid="_x0000_i1034" type="#_x0000_t75" style='width:468pt;
 height:206.25pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image052.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEjlQ0ex9YcgHRD6y7WMfKGveIyqK8L60JZQQ4fpcS2RpH-YFe5PjA5Fk4ZPx_Uv3ztkRv7QEsk77FDACBS7c1udHK2nk3alIRzYS8zFArMH9oSivmyhmx8TidKApeXN3B_CpqGG7mYhKmWRd8o91NVDvM5Kw6QkBd8KS1pt8nQfFDVu2_PkJpqH1Zvm" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<ul type="disc">
 <li>The
     bank statement import successfully:<o:p></o:p></li>
</ul>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_45" o:spid="_x0000_i1033" type="#_x0000_t75" style='width:468pt;
 height:202.15pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image054.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEhLjbj0SgfzJgMflLN0_uVplA9F5m_0YupFP8zr3gDWwbJVN-aDBjBVqMSRxRQN2aEGx0flIckin8njuSwMDf0y-bd_JNM-JIoTfNaRtA4Szxu3y82nZ6GJbZTMLVOzb5lti6wn4sTMbHgXlNFNJSZ1mAfLii6zeuglbwn2CV8eTuTSyuxiEbhFgRuB" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_44" o:spid="_x0000_i1032" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image056.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgQ-_WAHLmnfkGnArF8Esiu5R_Eh4Ystuzbwhbqx4OGa0gDs7lZ3J2OskJHSNxl52PNbdkfdbjGu8fxT6Y7pqWKsLCjNAXO82thjPHHpMT7cgWAW8pXabyGs701lWWXxh4cLGF8e21umWDXGVLdkTevJtvhH36QE4PA2q80BGTvBxDMIHVbI0M8fPLV" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_43" o:spid="_x0000_i1031" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image058.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEj2xGqSg6IlC9LXZtsCeNPGA_80-ddeyukxKTVxorkl5sJ3GZNth8YxB-unTEJVDzI1MtrCo4HlpAdHF2dkasIcLkhVHuJA2hIdStH6IvBzDYjcgT1U3pQnZmczpJluJDrsN025F23nQ28lWWhlQgKPtNw3ZGBGMgo4FO0WFPQBWH9NFGgEIr8AO6vZ" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_42" o:spid="_x0000_i1030" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image060.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEjrxFH8iP9qQzjlFQFVVBkRrDzp56xaPJt9T3v0H88jWolQoKPm7J9EcsyloyxGtykYf5ryETjTuETgT-V5Y5ZF0cgOOjCE5j3kFscdsHhn59VY0TOIirrDbCrsfmHx0EluwNsFUixAle6K7r79I9z5PII8hGodyc0Iem_c1lhLo9cnLR97N95Ul9dR" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_41" o:spid="_x0000_i1029" type="#_x0000_t75" style='width:467.65pt;
 height:261pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image062.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEg-A-W__gwA5fxBlwiNhsVnyrjWD-x0z3jYRlgXBuWwyoAW9VReTka-KL9YDbz_kd8VHuWESPQ5fOr2S-xNFensD6NOVcfE891wwPHu66_4OzsVHNdDBAZMA7oqHsNoHlr8Ed7gddW00rJZHm5OgOiXn6KGxFe0lpEJYaOG2RhBMQcHuC6_QAu0dHv2" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><b>IV. Conclusion<o:p></o:p></b></p>

<p>This is a great feature for the advanced bank reconciliation
process. I have some key notes below:<o:p></o:p></p>

<p>When enabling this feature, standard behaviour does not
allow to upload bank statement files manually for the statement format that is
linked to SharePoint. In case you want to upload manually, you need to
duplicate the bank statement format (ABR MT940) in electronic reporting for
import automatically from SharePoint and upload manually. Do steps as
following:<o:p></o:p></p>

<ol start="1" type="1">
 <li>Create
     new format that is derived from original format:<o:p></o:p></li>
</ol>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_40" o:spid="_x0000_i1028" type="#_x0000_t75" style='width:467.65pt;
 height:213.75pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image064.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEjGP5Cne_58Pq8EnhFnNqvcdHIIBdlPr7lSGHhEhJUHfYttE3GKcu4-EfUPECjX-Kzy7sFkvrZSc3una1u2WC0a9YeSL8SxoZd3We415KmVEVZOWHhgZYxP--daKqYk2MxG5vmd_xchlmfVDWuavRH9w1H-y69RN50r-O_ponHs6RscIdASjTKEAebi" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p>Click <b>Create configuration.</b><o:p></o:p></p>

<p>Select the format and change status to <b>Completed</b>:<o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_39" o:spid="_x0000_i1027" type="#_x0000_t75" style='width:468pt;
 height:181.15pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image066.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEhpidkRvgtbTtaIlrqnZtjt2jHhanSUJRhoMCPJA66VVNnT160-8PUvlF4ZMXT6trkfXhU5SbKPyh47YDAfFW4CbzjPv4swpLampVnPP7q5Qs1tRW-Mj_g_AcOUNHAWNNNFif4H9L4fJ0S485lm_3SeCBSGEiTY6pKba_4IVwNqn7ZMnEqd5LbRHGO4" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p>2. Go to Cash and bank management > Setup > Advanced
bank reconciliation setup > Bank statement format.<o:p></o:p></p>

<p>Setup new bank statement format for new format created in
previous step:<o:p></o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_38" o:spid="_x0000_i1026" type="#_x0000_t75" style='width:467.65pt;
 height:156pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image068.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgX0Zbfza1Wn6S2yMopBIt98Cs8FlHRtfxlm3z4opns9OPjBzSiXDMGo8qGDF_FuyMEiqXl_za_-VwAvofgNkK7MAo27_Es0riuw6rll61hMMM2zLKdjNQ_iT9LGojEW-zf-H6LW0eFHiMrBj0VyzDcwgZ4UmXA4-Nq_2AvQRhXtbwmRgp63A437OLH" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<p>3. In Bank statement form, click <b>Import statement</b>
=> select a value in <b>Bank account </b>field, then select the value
created in step 2 in <b>Statement format</b> field => Click <b>Browse</b> to
choose the file => OK:<o:p></o:p></p>

<p><o:p> </o:p></p>

<p><span><!--[if gte vml 1]><v:shape
 id="Picture_x0020_37" o:spid="_x0000_i1025" type="#_x0000_t75" style='width:467.65pt;
 height:140.25pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="file:///C:/Users/realm/AppData/Local/Temp/msohtmlclip1/01/clip_image070.png"
  o:title=""/>
</v:shape><![endif]--><!--[if !vml]--><img src="https://blogger.googleusercontent.com/img/a/AVvXsEj3RVcd-yn92fUKkaTtRHLil-RGw3fCERaBWe5j4iEJWlFEqg2EUrX4fX2hM7xWZYfP6FT0fOXlqqKoTfgdpU14klbjvBJId27HIMjUdJltAW4Wbe_SB6l_q19AW5ymdC-Q6lGZzUWmjQhjwM0EHEv_WniUmyChSZFCcjmdyPyIwqJopJUxScuMAlVP" alt="D365 FO Diagram" class="rounded-xl border border-slate-200 shadow-sm my-6 max-w-full h-auto" loading="lazy" /><!--[endif]--></span><o:p></o:p></p>

<ul type="disc">
 <li>If
     you want to set up different folders for different banks in SharePoint,
     you need to separate bank statement format for each bank (Duplicate the
     bank statement format (ABR MT940) in electronic reporting).<o:p></o:p></li>
</ul>

<p><o:p> </o:p></p>

<p>Thanks to <a href="https://www.linkedin.com/article/edit/7367808650087686144/" target="_blank"><b>Ramit Paul</b></a> <a href="https://www.linkedin.com/article/edit/7367808650087686144/" target="_blank"><b>Karthik S</b></a> <a href="https://www.linkedin.com/article/edit/7367808650087686144/" target="_blank"><b>Ramita Chaurasiya</b></a> <o:p></o:p></p>

<p><o:p> </o:p></p>

<p><a href="https://www.linkedin.com/pulse/automatic-importing-bank-statement-from-sharepoint-folder-th%E1%BA%AFng-vb1sf/"><b>Automatic
importing bank statement from SharePoint folder and combining with Power
Automate for an end-to-end solution | LinkedIn - </b></a><a href="https://www.linkedin.com/in/ACoAACaUDZoBOJzrqSH74fYBpEjt-An-iLnrUKw?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACaUDZoBOJzrqSH74fYBpEjt-An-iLnrUKw" target="_blank"><b>Nguyễn Hoài Thắng</b></a> <o:p></o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>

<p><o:p> </o:p></p>
