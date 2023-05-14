import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
    const [inputField , setInputField] = useState({
        FirstName: '',
        LastName: '',
        Mobile : '',
        Email: '',
        City : '',
        base64String : ''
    })

    let base64String = "";

    const imageUploaded = () => {
        const file = document.querySelector(
            'input[type=file]')['files'][0];
      
        let reader = new FileReader();
          
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");

            setInputField((prevState) => ({
                ...prevState,
                base64String: base64String,
            }));
        }
        reader.readAsDataURL(file);
    }

    const handleInputValue = (e)  => {
        const { name, value } = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const submitButton = async () => {
        console.log(inputField)
        const jsonData = inputField
        const headers = {
            'content-type': 'application/json',
            'crossorigin':true,
            'authorization' : 'Bearer ' + '00D1y0000008qLN!ARkAQNY4yqUX92yvGuzYDbZMQeRNQ0Dzsth9Y1MmcB0e7ymiOHhkgudp3Wngf.QLBAT1gIDeoYPWerHvTuquakOcJxjmsR3K'
        }
        try {
            const response = await axios.post(
                `https://altdigitaltechnologiespvtltd2--developer.sandbox.my.salesforce.com/services/apexrest/Candidate`,
                jsonData,
                {headers : headers}
            )
            console.log(response.data + response.status)
        } catch (error) {
            console.log("error is ==> ", error)
        }
        
        
    }
    return(
       <>
       <div className="mb-3 container-fluid">
            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
            <input type="text" className="form-control" name="FirstName" value={inputField.FirstName} placeholder="Enter your first name" onChange={(e)=> handleInputValue(e)} />

            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
            <input type="text" className="form-control" name="LastName" value={inputField.LastName} placeholder="Enter your last name" onChange={(e)=> handleInputValue(e)} />

            <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
            <input type="text" className="form-control" name="Mobile" value={inputField.Mobile} placeholder="Enter your mobile number" onChange={(e)=> handleInputValue(e)} />

            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="Email" value={inputField.Email} placeholder="Enter email" onChange={(e)=> handleInputValue(e)} />

            <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
            <input type="email" className="form-control" name="City" value={inputField.City} placeholder="Enter city name" onChange={(e)=> handleInputValue(e)} />

            <label htmlFor="exampleFormControlInput1" className="form-label">Upload</label>
            <input type="file" className="form-control" name="base64String" onChange={imageUploaded}/>
            <br/>
            <button onClick={submitButton}>Submit Now</button>



            <div className="mb-3 container-fluid">
            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
            <input type="text" className="form-control" name="FirstName" placeholder="Enter your first name" />

            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
            <input type="text" className="form-control" name="LastName" placeholder="Enter your last name" />

            <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
            <input type="text" className="form-control" name="Mobile" placeholder="Enter your mobile number" />

            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="Email" placeholder="Enter email" />

            <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
            <input type="email" className="form-control" name="City" placeholder="Enter city name" />

            <label htmlFor="exampleFormControlInput1" className="form-label">Upload</label>
            <input type="file" className="form-control" name="base64String"/>
            <br/>
            <button onClick={submitButton}>Submit Now</button>

        </div>

        </div>
       </>
    )
}

export default Form