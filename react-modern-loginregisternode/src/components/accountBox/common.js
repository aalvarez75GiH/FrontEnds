import styled from 'styled-components'



export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 10px;

`

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* box-shadow: 0px 0px 2.5px rgba(15, 15,15,0.19); */
`

export const MutedLink = styled.a `
    font-size: 11px;
    color: rgba(200,200,200,0.8);
    font-weight: 500;
    text-decoration: none;


`

export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(241,196,15);
    font-weight: 500;
    text-decoration: none;
    margin: 0 4px;

`

export const Input = styled.input`
    outline: none;
    height: 42px;
    width: 100%;
    border: 1px solid rgba(200,200,200, 0.3);
    /* border: ${({ errors })=> (errors ? '2px solid red' : '1px solid rgba(200,200,200, 0.3 )')}; */
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out ;
    font-size: 12px;

&::placeholder {
    color: rgba(200,200,200, 1)
}

&:not(:last-of-type){
    border-bottom: 1.5px solid rgba(200,200,200, 0.4) ;
}

&:focus{
    outline: none;
    border-bottom: 2px solid rgb(241,196,15);
}

`
export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(241,196,15);
    background: linear-gradient(
        58deg, rgba(241,196,15,1) 20%, 
        rgba(243,172,18,1) 100%);
    
    &:hover{
        filter: brightness(1.03);
    }

    &:disabled {
        filter: contrast(0.7);
    }

`

export const FieldContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
` 
export const FieldError =styled.span`
    color: #b32e2e;
    font-size: 11px;
    min-height: 18px;
    border-top: 1px solid rgba(200,200,200, 0.3) ;

`

export const FieldSuccess = styled.div`
    color: green;
    font-size: 12px;
    min-height: 20px;
    font-weight: 600;

`
export const FieldFailure = styled.div`
    color: red;
    font-size: 12px;
    min-height: 20px;
    font-weight: 600;

`


