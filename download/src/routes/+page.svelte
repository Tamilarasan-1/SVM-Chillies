<script>
    import { logo } from "./logo";

 const details = {
           "Date" : "14-10-2014",
           "To":"Amman vegetables",
           "Bill No": "SVM1905",
           "ItemData" : [
                    {"name": "தக்காளி","quantity": 2,"weight": "1","price": 30,"total": 60},
                    {"name": "உருளைக்கிழங்கு","quantity": 3,"weight": "1.5","price": 20,"total": 60},
                    {"name": "காரட்","quantity": 1,"weight": "0.5","price": 40,"total": 40},
                    {"name": "முட்டைகோஸ்","quantity": 1,"weight": "1","price": 25,"total": 25},
                    {"name": "வெங்காயம்","quantity": 2,"weight": "1","price": 15,"total": 30}
                ],
            "Sub Total": 11355,
            "Previous Balance": 241607,
            "Last payment": 0,
             "Last discount" : 0,
             "Closing Balance": 252962,
        };

</script>



<!--                         

<main>            
               
<img src={logo} alt="this app logo" width = 300px >


<div class="grid-container">
        <div class="content">
            <p><span class="label">Date</span> <span class="colon">:</span> <span class="value">{details.Date}</span></p>
            <p><span class="label">To</span> <span class="colon">:</span> <span class="value">{details.To}</span></p>
            <p><span class="label">Bill No</span> <span class="colon">:</span> <span class="value">{details["Bill No"]}</span></p>
        </div>
</div>

          
   <center> 
  
    <table>
             <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Weight(kg)</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
                <tbody>
                {#each details.ItemData as item}
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.weight}</td>
                            <td>{item.price.toFixed(2)}</td>
                            <td>{item.total.toFixed(2)}</td>
                        </tr>
                        {/each}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4" class="total">Sub Total</td>
                        <td class="total">{details["Sub Total"]}</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="total">previous Balance</td>
                        <td class="total">{details["Previous Balance"]}</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="total">Last Payment</td>
                        <td class="total">{details["Last payment"]}</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="total">Last Discount</td>
                        <td class="total">{details["Last discount"]}</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="total">Closing Balance</td>
                        <td class="total">{details["Closing Balance"]}</td>
                    </tr>
                </tfoot>
    </table>

        <h4>Come back soon, happy shopping!</h4>
 
 </center>
</main> 
    <style>

        .content{
           
            width: 200px;
        }
  main {
    width: 80%;
    margin: 0 auto; 
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1em; 
}

th, td {
    border: 1px solid black;
    padding: 12px; 
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

.total {
    font-weight: bold;
}

.grid-container {
    display: grid;
    float: right;
    display: flex;
    flex-direction: column; /* Stack elements vertically */
    gap: 10px;
    
}


.label {
    font-weight: bold; /* Bold for labels */
    margin-right: 5px; /* Space between label and colon */
}

.colon {
    margin: 0 5px; /* Space around colon */
}

.value {
    color: #333; /* Color for values */
}

p{
    margin: 0.5em;
}
    </style> -->