import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from "../components/header";
import Footer from "../components/footer";
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react"
export default function Home({country}) {
    const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}
export async function getServerSideProps(){
    let data = await axios.get('https://api.ipregistry.co/?key=x99mxbfypg3z38fb')
    .then((res)=>{
        return res.data.location.country;
    }).catch((err)=>{
        console.log(err);
    });
    return{
        props:{
            // country :{name:data.name , flag:data.flag.emojitwo},
            country :{name:"Iran", flag:"\public\flag.png"},

        }
    }
}
