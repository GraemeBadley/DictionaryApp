import React from "react";

function Audio({ phonetics }) {
    const phonetic = phonetics.find(value => !!value.audio);

    function playAudio() {
        var audioPlayer = document.getElementById("audioPlayer");
        try {
            audioPlayer.play();
        } catch (error) {
            console.log(error);
        }
    }

    if (phonetic) {
        return (
            <React.Fragment>
                <audio id="audioPlayer" src={phonetic.audio}></audio>
                <button onClick={playAudio} className="play-button"></button>
            </React.Fragment>
        );
    }
}

export default Audio;