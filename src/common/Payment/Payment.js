import { useEffect, useRef } from "react";
const price = localStorage.getItem('price');
const Paypal = () =>{
    const paypal = useRef();
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder:(data,actions,error)=>{
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units:[
                        {
                            description:"hello guys",
                            amount:{
                                currency_code:"USD",
                                value:localStorage.getItem('price')*(0.1)
                            },
                        },
                    ],
                });
            },
                onApprove: async (data,actions) =>{
                    const order= await actions.order.capture();
                    console.log(order);
                    localStorage.setItem('payment',true);
                    
                },
            onError:(err) =>{
                console.log(err)
            }
        }).render(paypal.current)
    },[]);
    return(<>
    <div>
        <div ref={paypal} style={{height:"200px",width:"200px"}}></div>
    </div>
    </>);
}
export default Paypal;