import React, { useState } from 'react'
import { Field } from 'formik'
import { MdKeyboardArrowDown } from 'react-icons/md'

const options = [
    {value: 'Caracas', label:'Caracas', id:"1"},
    {value: 'Barquisimeto', label:'Barquisimeto',id:"2"},
    {value: 'Valencia', label:'Valencia' ,id:"3"},
    {value: 'Maracaibo', label:'Maracaibo', id:"4"}
]

const SelectCity = ({ error, onChange }) => {
    console.log(error)

    const [ active, setActive ] = useState(false)
    
    const handlingOnclick = () => {
        setActive(true)
    }

     return (
        <div className="form-control">
            {/* <div className="form-control-arrowIcon">
                <MdKeyboardArrowDown/>
            </div> */}
            
            <Field
            placeholder="Introduce tu city"
            className={
                error ? "cityDropDownListError" : 
                active ? "cityDropDownListActive" : "cityDropDownList"
            }
            name="city"
            as="select"
            onChange={onChange}
            onClick={handlingOnclick}
            >
            <option 
            className="dropDownDefaultOption"
            value="default">Ciudad
            </option>
            {
                options.map(option => {
                    return(
                        <>
                        <option
                        className="dropDownOption"
                        key={option.id}
                        value={option.value}
                        >
                        {option.value}
                        </option>
                        
                        </>
                        
                    )
                })
            }
            </Field>
            
        </div>
    )
}

export default SelectCity
