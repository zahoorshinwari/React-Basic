import ProfileCard from "./ProfileCard";

function App() {
    return (
        <div>
            <div>
                Personal Digital assistants
            </div>

            <ProfileCard title="Alexa" handle="@alexa99" />
            <ProfileCard title="Cortana" handle="@cortana32" />
            <ProfileCard title="Siri" handle="@Siri01" />
        </div>
    );
}

export default App;