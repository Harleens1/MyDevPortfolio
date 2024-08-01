import { useState } from "react"

const Contact = () => {  

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4b2ec868-2ccb-4eb1-bae7-ee64afa151bf");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      }; 


    return <section>
        <h1 className="text-4xl text-left font-bold my-6">Contact me</h1>  
        <div className="bg-white text-left rounded-xl p-8">
        <p>Interested in working with me? Contact me at <a href="mailto:harleens@mun.ca">harleens@mun.ca</a></p>
        <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-6">
            <input 
              type="text"  
              name="name"
              placeholder="your name" 
              className="text-md bg-background rounded-xl px-4 py-3 placholder-opacity-50 focus:outline-none border w-full" 
              
              
            /> 
            <input 
              type="email" 
              name="email"
              placeholder="your email" 
              className="text-md bg-background rounded-xl px-4 py-3 placholder-opacity-50 focus:outline-none border w-full"  
              

            /> 
            <textarea 
              placeholder="your message"  
              name="message"
              rows="4"
              className="text-md bg-background rounded-xl px-4 py-3 placholder-opacity-50 focus:outline-none border w-full"  
              
              /> 
              <button type="submit" className="bg-primary text-white">Send</button>
        </form>
        </div>
    </section>
} 

export default Contact