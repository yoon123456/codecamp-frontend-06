import { useState } from 'react'

import {Wrapper,
        Header,
        Email,
        Password,
        Button,
        ErrorEmail,
        ErrorPassword,
        ErrorAllPassword
} from '../../../styles/singup'


export default function SignupPage(){

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    
    const [passwordError, setPasswordError] = useState("")


    const [allPasswordError, setAllPasswordError] = useState("")


    function onChangeEmail(event){
        setEmail(event.target.vlaue)
    }

    function onChangePassword1(event){
        setPassword1(event.target.vlaue)
    }

    function onChangePassword2(event){
        setPassword2(event.target.vlaue)
    }




    function onClickSingup(){

        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다")
        }else if(email === ""){
            setNameError("이메일이 올바르지 않습니다!")
        }else{
            setNameError("")
        }
        
        
        if(email ==="" & password1 ==="" & password2){
            setEmailError("이메일이 올바르지 않습니다")
            setPasswordError("비밀번호가 올바르지 않습니다")
        }else{
            setEmailError("")
            setPasswordError("")
        }
        

        if(password1 === ""){
            setPasswordError("비밀번호가 올바르지 않습니다")
        }else if(password2 === ""){
            setPasswordError("비밀번호가 올바르지 않습니다")
        } else if(password1 !== password2){
            setAllPasswordError("비밀번호가 같지 않습니다")
        }else{
            setPasswordError("")
            setAllPasswordError("")
        } 
        
        if(email ==="" & password1 ==="" & password2 & password1 === password2){
            alert("회원가입을 축하합니다!")
        }

         
    }
        
    



    

    
    
  


    
  
    
    return(
        <Wrapper>
            <Header>코드캠프 회원가입</Header>
                <Email type="text" placeholder="이메일을 입력해 주세요." onChange={onChangeEmail}/>
                <ErrorEmail>{emailError}</ErrorEmail>
                <Password id="password1" type="password" placeholder="비밀번호를 입력해 주세요." onChange={onChangePassword1} />
                <ErrorPassword>{passwordError}</ErrorPassword>
                <Password id="password2" type="password" placeholder="비밀번호를 다시 입력해 주세요."onChange={onChangePassword2}/>
                <ErrorPassword>{passwordError}</ErrorPassword>
                <ErrorAllPassword>{allPasswordError}</ErrorAllPassword>
                <Button onClick={onClickSingup}>가입하기</Button>
        </Wrapper>
    
    )

}
