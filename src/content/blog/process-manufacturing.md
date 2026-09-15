---
title: "Process Manufacturing"
description: "Advanced Process Manufacturing: The Semi-Finished Good (SFG) Scenario In complex food manufacturing, products are rarely made in a single, uninterrupted st..."
pubDate: 2026-04-05
author: "Manu Sharma"
category: "Process Manufacturing"
tags: ["Process Manufacturing","Formulas","Routes","SFG","Batch Orders"]
readingTime: "4 min read"
featured: false
---

<p>In complex food manufacturing, products are rarely made in a single, uninterrupted step. Instead, production is broken down into intermediate stages using <strong>Semi-Finished Goods (SFGs)</strong>. This allows a business to accurately track the cost, yield, and inventory of intermediate items—like dough or bulk sauces—before they are consumed into the final retail packaging.</p>

  <p>In Dynamics 365 Finance & Operations, this multi-level approach requires <strong>two Formulas</strong> and <strong>two Routes</strong>. Let's walk through a complete end-to-end scenario for producing 50,000 packets of Frozen Paneer Momos, culminating in the exact $49,901.50 final ledger voucher we analyzed earlier.</p>

  <hr>

  <h2>PHASE 1: SFG Production (Momo Dough)</h2>
  
  <p><strong>The Scenario:</strong> Before we can assemble the momos, the kitchen staff must prepare the dough in bulk. We are initiating a Batch Order to produce <strong>5,750 kg of Momo Dough</strong>, which is exactly the amount required to satisfy our final order of 50,000 momo packets.</p>
  
  <p><strong>Financial Impact:</strong> When this batch is started, the system debits WIP for the flour and water. As the industrial mixers run, labor and overhead costs are "absorbed" into WIP. When this first batch order is <strong>Ended</strong>, the total accumulated cost ($2,600.00) is credited out of WIP and debited into our SFG Inventory account. The dough now sits in our warehouse with a standard cost of $0.4521 per kg, ready to be used.</p>

  <p><strong>Item:</strong> SFG-DGH-01 | <strong>Batch Size:</strong> 5,750 kg</p>

  <h3>1. SFG Formula (Ingredients)</h3>
  <div>
    <table>
      <thead>
        <tr>
          <th>Item Number</th>
          <th>Product Name</th>
          <th>UoM</th>
          <th>Cost Group</th>
          <th>Qty (Per 1 kg)</th>
          <th>Cost</th>
          <th>Qty (5,750 kg)</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>RM-FLR-01</td>
          <td>All-purpose Flour (Maida)</td>
          <td>kg</td>
          <td>RM-ING</td>
          <td>0.6956</td>
          <td>$0.50</td>
          <td>4,000</td>
          <td>$2,000.00</td>
        </tr>
        <tr>
          <td>RM-WAT-01</td>
          <td>Purified Water</td>
          <td>ltr</td>
          <td>RM-ING</td>
          <td>0.3044</td>
          <td>$0.20</td>
          <td>1,750</td>
          <td>$350.00</td>
        </tr>
        <tr>
          <td colspan="7">SFG MATERIAL TOTAL</td>
          <td>$2,350.00</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>2. SFG Operations & Overheads</h3>
  <div>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Operation / Desc</th>
          <th>Cost Group</th>
          <th>Rate / Basis</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Labor</td>
          <td>Dough Mixing (3 hrs)</td>
          <td>OP-MIX</td>
          <td>$40.00 / hr</td>
          <td>$120.00</td>
        </tr>
        <tr>
          <td>Overhead</td>
          <td>Electricity (Mixer)</td>
          <td>OVH-ELE</td>
          <td>Unit Based</td>
          <td>$30.00</td>
        </tr>
        <tr>
          <td>Overhead</td>
          <td>Machine Depreciation</td>
          <td>OVH-DEP</td>
          <td>Unit Based</td>
          <td>$100.00</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <table>
      <tbody>
        <tr>
          <td>SFG Standard Cost Per kg</td>
          <td>$0.4521</td>
        </tr>
        <tr>
          <td>SFG Total Transferred to Inventory</td>
          <td>$2,600.00</td>
        </tr>
      </tbody>
    </table>
  </div>

  <hr>

  <h2>PHASE 2: FG Production (Frozen Paneer Momo)</h2>
  
  <p><strong>The Scenario:</strong> With the dough prepared, we now initiate the primary Batch Order for <strong>50,000 packets of Frozen Paneer Momos</strong>. This is where the multi-level magic happens.</p>
  
  <p><strong>Financial Impact:</strong> The very first item on our Picking List is the SFG Dough we just made. D365 pulls this dough out of inventory at its calculated value ($2,600), bringing all its embedded material and labor costs directly into Phase 2. We then pick the expensive paneer filling, spices, and packaging. Once the final momos roll off the assembly line and the order is Ended, the system calculates the grand total. The voucher (PCV-14187) successfully posts an actual inventory asset value of exactly $49,901.50.</p>

  <p><strong>Item:</strong> FG-MOM-01 | <strong>Batch Size:</strong> 50,000 Packets</p>

  <h3>1. FG Formula (Consuming the SFG)</h3>
  <div>
    <table>
      <thead>
        <tr>
          <th>Item Number</th>
          <th>Product Name</th>
          <th>UoM</th>
          <th>Cost Group</th>
          <th>Qty (Per Pkt)</th>
          <th>Cost</th>
          <th>Qty (50k Pkts)</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>SFG-DGH-01</strong></td>
          <td><strong>Momo Dough (From Phase 1)</strong></td>
          <td>kg</td>
          <td>SFG-MAT</td>
          <td>0.115</td>
          <td>$0.4521</td>
          <td>5,750</td>
          <td><strong>$2,600.00</strong></td>
        </tr>
        <tr>
          <td>RM-PNR-01</td>
          <td>Fresh Paneer (Diced)</td>
          <td>kg</td>
          <td>RM-ING</td>
          <td>0.110</td>
          <td>$6.90</td>
          <td>5,500</td>
          <td>$37,950.00</td>
        </tr>
        <tr>
          <td>RM-VEG-01</td>
          <td>Chopped Veggies/Onions</td>
          <td>kg</td>
          <td>RM-ING</td>
          <td>0.030</td>
          <td>$3.40</td>
          <td>1,500</td>
          <td>$5,100.00</td>
        </tr>
        <tr>
          <td>RM-SPC-01</td>
          <td>Momo Spices/Seasoning</td>
          <td>kg</td>
          <td>RM-ING</td>
          <td>0.015</td>
          <td>$3.46</td>
          <td>750</td>
          <td>$2,600.00</td>
        </tr>
        <tr>
          <td>PM-BAG-01</td>
          <td>Printed Food Pouch</td>
          <td>ea</td>
          <td>PM-PKG</td>
          <td>1.000</td>
          <td>$0.02</td>
          <td>50,000</td>
          <td>$1,000.00</td>
        </tr>
        <tr>
          <td colspan="7">FG MATERIAL TOTAL (Including SFG value)</td>
          <td>$49,250.00</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>2. FG Operations & Overheads</h3>
  <div>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Operation / Desc</th>
          <th>Cost Group</th>
          <th>Rate / Basis</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Labor</td>
          <td>Assembly (7 hrs)</td>
          <td>OP-ASS</td>
          <td>$40.00 / hr</td>
          <td>$280.00</td>
        </tr>
        <tr>
          <td>Labor</td>
          <td>Packaging (5 hrs)</td>
          <td>OP-PCK</td>
          <td>$20.00 / hr</td>
          <td>$100.00</td>
        </tr>
        <tr>
          <td>Overhead</td>
          <td>Electricity (Line)</td>
          <td>OVH-ELE</td>
          <td>Unit Based</td>
          <td>$70.00</td>
        </tr>
        <tr>
          <td>Overhead</td>
          <td>Machine Depreciation</td>
          <td>OVH-DEP</td>
          <td>Unit Based</td>
          <td>$201.50</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Final Cost Summary (Ledger Voucher Match)</h3>
  <div>
    <table>
      <tbody>
        <tr>
          <td>Total Rolled-up Cost Per Unit (1 Packet)</td>
          <td>$0.99803</td>
        </tr>
        <tr>
          <td>Total Batch Actual Cost (Voucher PCV-14187)</td>
          <td>$49,901.50</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
