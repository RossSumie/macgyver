/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable new-cap */
import { useEffect, useState, useRef } from 'react';
import * as S from './styles';

// Declare a global interface to add the webkitSpeechRecognition property to the Window object
declare global {
    interface Window {
        webkitSpeechRecognition: any;
    }
}

// Export the MicrophoneComponent function component
export default function MicrophoneComponent() {
    // State variables to manage recording status, completion, and transcript
    const [isRecording, setIsRecording] = useState(false);
    const [recordingComplete, setRecordingComplete] = useState(false);
    const [transcript, setTranscript] = useState('');

    // Reference to store the SpeechRecognition instance
    const recognitionRef = useRef<any>(null);

    // Function to start recording
    const startRecording = () => {
        setIsRecording(true);
        // Create a new SpeechRecognition instance and configure it
        recognitionRef.current = new window.webkitSpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        // Event handler for speech recognition results
        recognitionRef.current.onresult = (event: any) => {
            // eslint-disable-next-line no-shadow
            const { transcript } = event.results[event.results.length - 1][0];

            // Log the recognition results and update the transcript state
            setTranscript(transcript);
        };

        // Start the speech recognition
        recognitionRef.current.start();
    };

    // Cleanup effect when the component unmounts
    useEffect(() => {
        return () => {
            // Stop the speech recognition if it's active
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    // Function to stop recording
    const stopRecording = () => {
        if (recognitionRef.current) {
            // Stop the speech recognition and mark recording as complete
            recognitionRef.current.stop();
            setRecordingComplete(true);
        }
    };

    // Toggle recording state and manage recording actions
    const handleToggleRecording = () => {
        setIsRecording(!isRecording);
        if (!isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    };

    // Render the microphone component with appropriate UI based on recording state
    return (
        <S.Container>
            {(isRecording || transcript) && (
                <S.RecordingTitleContainer>
                    <div className="flex-1 flex w-full justify-between">
                        <div className="space-y-1">
                            <S.RecordingText>
                                {recordingComplete ? 'Recorded' : 'Recording'}
                            </S.RecordingText>
                            <S.RecordingText>
                                {recordingComplete
                                    ? 'Thank you for your feedback'
                                    : 'Start speaking...'}
                            </S.RecordingText>
                        </div>
                        {isRecording && (
                            <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
                        )}
                    </div>

                    {transcript && (
                        <S.TranscriptContainer style={{ marginBottom: 24 }}>
                            <S.TranscriptText>"{transcript}"</S.TranscriptText>
                        </S.TranscriptContainer>
                    )}
                </S.RecordingTitleContainer>
            )}

            <S.ButtonContainer>
                {isRecording ? (
                    // S.Button for stopping recording
                    <S.Button
                        onClick={handleToggleRecording}
                        style={{
                            backgroundColor: '#FF0000'
                        }}
                        className="mt-10 m-auto flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-full w-20 h-20 focus:outline-none"
                    >
                        <svg
                            className="h-12 w-12 "
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ height: 24, width: 24 }}
                        >
                            <path
                                fill="white"
                                d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                            />
                        </svg>
                    </S.Button>
                ) : (
                    // S.Button for starting recording
                    <S.Button
                        style={{ backgroundColor: '#202A44' }}
                        onClick={handleToggleRecording}
                        className="mt-10 m-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full w-20 h-20 focus:outline-none"
                    >
                        <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-white"
                            style={{ height: 24, width: 24, color: '#FFFFFF' }}
                        >
                            <path
                                fill="currentColor" // Change fill color to the desired color
                                d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                            />
                        </svg>
                    </S.Button>
                )}
            </S.ButtonContainer>
        </S.Container>
    );
}
