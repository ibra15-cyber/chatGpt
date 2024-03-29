import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";
import ChatInput from "../components/ChatInput"

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white px-2">
      <h1 className="text-5xl font-bold mb-28">ChatGPT</h1>

      <div className="flex space-x-2 text-center">

        <div>
            <div className="flex flex-col items-center justify-center mb-5">
                <BoltIcon className="h-8 w-8"/>
                <h2>Capabilities</h2>
            </div>

            <div className="space-y-2">
                <p className="infoText">"Explain Something to me"</p>
                <p className="infoText"> "what is the difference betweeen a cat and a dog"</p>
                <p className="infoText">"What is the color of the sun"</p>
            </div>
        </div>

        <div>
            <div className="flex flex-col items-center justify-center mb-5">
                <ExclamationTriangleIcon className="h-8 w-8"/>
                <h2>Examples</h2>
            </div>

            <div className="space-y-2">
                <p className="infoText">"Explain Something to me"</p>
                <p className="infoText"> "what is the difference betweeen a cat and a dog"</p>
                <p className="infoText">"What is the color of the sun"</p>
            </div>
        </div>

        <div>
            <div className="flex flex-col items-center justify-center mb-5">
                <SunIcon className="h-8 w-8"/>
                <h2>Limitations</h2>
            </div>

            <div className="space-y-2">
                <p className="infoText">"Explain Something to me"</p>
                <p className="infoText"> "what is the difference betweeen a cat and a dog"</p>
                <p className="infoText">"What is the color of the sun"</p>
            </div>
        </div>

      </div>

      {/* <ChatInput /> */}

    </div>
  );
}

export default HomePage;
