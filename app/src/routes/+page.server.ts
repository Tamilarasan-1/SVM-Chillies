
import type { PageServerLoad } from './$types';

import captureWebsite from 'capture-website';
import { logo } from './logo';
import os from 'os';
import path from 'path';

export const load = (async () => {

    let details = {
        "Date": "14-10-2014",
        "To": "Amman vegetables",
        "Bill No": "SVM1905",
        "ItemData": [
            { "name": "தக்காளி", "quantity": 2, "weight": "1", "price": 30, "total": 60 },
            { "name": "உருளைக்கிழங்கு", "quantity": 3, "weight": "1.5", "price": 20, "total": 60 },
            { "name": "காரட்", "quantity": 1, "weight": "0.5", "price": 40, "total": 40 },
            { "name": "முட்டைகோஸ்", "quantity": 1, "weight": "1", "price": 25, "total": 25 },
            { "name": "வெங்காயம்", "quantity": 2, "weight": "1", "price": 15, "total": 30 }
        ],
        "Sub Total": 11355,
        "Previous Balance": 241607,
        "Last payment": 0,
        "Last discount": 0,
        "Closing Balance": 252962,
    };
    const htmlContent = `
    <html>
        <head>
            <style>
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
            </style>
        </head>
        <body>
            <main>
                <img src=${logo} alt="this app logo" width="300px" />

                <div className="grid-container">
                    <div className="content">
                        <p><span className="label">Date</span> <span className="colon">:</span> <span className="value">${details.Date}</span></p>
                        <p><span className="label">To</span> <span className="colon">:</span> <span className="value">${details.To}</span></p>
                        <p><span className="label">Bill No</span> <span className="colon">:</span> <span className="value">${details["Bill No"]}</span></p>
                    </div>
                </div>

                <center>
                    <table>
                        <thead>
                            <tr>
                                <th>S No</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Weight (kg)</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${details.ItemData.map((item, index)=> (`
                                <tr key={index}>

                                    <td>${index+1}</td>
                                    <td>${item.name}</td>
                                    <td>${item.quantity}</td>
                                    <td>${item.weight}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>${item.total.toFixed(2)}</td>
                                </tr>
                            `)).join("")}
                        </tbody>
                        
                        <tfoot>
                            <tr>
                                <td colSpan="5" className="total">Sub Total</td>
                                <td className="total">${details["Sub Total"]}</td>
                            </tr>
                            <tr>
                                <td colSpan="5" className="total">Previous Balance</td>
                                <td className="total">${details["Previous Balance"]}</td>
                            </tr>
                            <tr>
                                <td colSpan="5" className="total">Last Payment</td>
                                <td className="total">${details["Last payment"]}</td>
                            </tr>
                            <tr>
                                <td colSpan="5" className="total">Last Discount</td>
                                <td className="total">${details["Last discount"]}</td>
                            </tr>
                            <tr>
                                <td colSpan="5" className="total">Closing Balance</td>
                                <td className="total">${details["Closing Balance"]}</td>
                            </tr>
                        </tfoot>
                    </table>

                    <h4>Come back soon, happy shopping!</h4>
                </center>
            </main>
        </body>
    </html>
`;


// For Windows, Mac, or Linux
// const downloadsPath = process.env.NODE_ENV === 'development'? path.join(os.homedir(), 'Downloads'): "/tmp";
// const downloadsPath = path.join(os.homedir(), 'Downloads');

// console.log({downloadsPath});



    //  await captureWebsite.file(htmlContent, `${downloadsPath}/${details.To}.png`, {
    //     inputType: 'html'
    // });
  console.log("<-----------------Image Save successfully--------->")
    return {};
}) satisfies PageServerLoad;