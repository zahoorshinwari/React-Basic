// importing the bulma css file
import 'bulma/css/bulma.css';

import ProfileCard from "./ProfileCard";

// importing images
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                        Personal Digital Assistant
                    </p>
                </div>
            </section>
           
           <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage}
                            description="Amazon Alexa App to set up your Alexa-enabled devices, listen to music, create shopping lists, get news updates, and much more. The more you use Alexa, the more she adapts to your voice, vocabulary, and personal preferences."
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage}
                            description="Cortana in Windows has a chat-based UI that gives you the ability to interact using typed or spoken natural language queries. You can resize, move, and dock the app window on your desktop to accommodate your preferred workflow."
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                            title="Siri" 
                            handle="@Siri01" 
                            image={SiriImage}
                            description="Siri App for Voice Commands is an app supporting Siri commands in multi-languages, pod skills for HomePod and making your smart assistant. Feel free to talk to Siri in any language and this app will instantly translate your voice."
                            />
                        </div>
                    </div>
                </section>
           </div>
        </div>
    );
}

export default App;