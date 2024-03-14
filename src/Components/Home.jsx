import React from 'react'
import './Css/Home.css'
import Compose from './Compose'
import Heropage from './Heropage'

const Home = () => {
  return (
    <div className='home-page'>
       <Heropage/>
        <section className='rules-container'>
            <h2>Hello Everyone:)</h2>
            <p>Here is the very Anonymous Confession site for you all. </p>
            <p>Before Confessing make sure to follow these rules mentioned below.</p>
            <div className="lists-container">
                <ol>
                    <li>1. It must be a confession.</li>
                    <li>2. No names or contact information to be shared</li>
                    <li>3. Racial discrimination of any kind, abuse, hate speech or threatening post or submissions will not be tolerated</li>
                    <li>4. Refrain from defamation, controversial topics and hurtful comments. Offensive or unverified topics are not to be discussed</li>
                </ol>
                
            </div>
            <p>For your knowledge: We are not responsible for anyone not following these rules though we will try our best to control it :)</p>
        </section>
        <section className='byakta-section'>
            <h2>Confess Now!</h2>
            <Compose/>
        </section>
    </div>
  )
}

export default Home