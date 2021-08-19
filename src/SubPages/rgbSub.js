import React from 'react';
import AbsoluteWrapper from '../Pages/AbsoluteWrapper';
import ListWrapper from '../Pages/ListWrapper';
import ContentWrapper from '../Pages/ContentWrapper';
import TitleHeaderWrapper from "../Pages/TitleHeaderWrapper";
import HeaderWrapper from "../Pages/HeaderWrapper";
import BodyWrapper from "../Pages/BodyWrapper";

//import reactspring and navlink
import { useSpring, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';



function rgbSub(){
	return (
		<AbsoluteWrapper>
			<ListWrapper>
				<ContentWrapper>
					<TitleHeaderWrapper>	
						RGB Lightstrip Music Visualizer Without Using Stereo Mix
					</TitleHeaderWrapper>
					<HeaderWrapper>
						Introduction
					</HeaderWrapper>
					<BodyWrapper>
						This project aims to visualize sound loudness over a variety of frequency range without using Stereo Mix(more on this later) in real time.
						The goal is to send this live data through serial COM port to an Arduino or some micro-controller connected to an RGB strip(link on how to setup the Arduino) and visualize it there.
						The main problem with this is that most of the guides on the internet tells the user to use Stereo Mix on windows to achieve live audio recording.
						There is nothing wrong with this approach, however, when the user is using an external device to output there audio(such as a DAC or USB headphone) this approach proves useless since Stereo Mix cannot capture the sound being output to those devices.
						Stereo Mix relies on listening in the default audio hardware on the motherboard. So to overcome this issue we need to use WASAPI(Windows Audio Session API).
						This API can help us capture playback of audio with low latency audio playback and capture to any devices that Windows is outputing to.
						Using this API we can easily manipulate and read the audio data and send information from it to the micro-controller.
					</BodyWrapper>
					<HeaderWrapper>
						Main
					</HeaderWrapper>
					<BodyWrapper>
						I am going to be using Python mainly for this project as there is a fork of a portaudio respository that helps with setting up WASAPI.
						C++ also works but I think for this project doing stuffs with arrays are far more convenient with Python. 
						In the codes, the first 120 lines are just setting up audio and micro-controller devices and prompting the users to choose them, so I will just skip those steps.
						Now I will get into the audio processing part of this project.
					</BodyWrapper>
					<BodyWrapper>
						I first read the current data that is in a certain amount of frames <br/>to find the peak magnitutde. 
						In this case I read 256 frames the lower the more accurate at any certain time.<br/>
						Then unpack those data and put it into an nparray that is formanted.<br/>
								<div>
								#get binary chunk
    							data = stream.read(defaultframes) <br/>
    							#format binary chunk and put it in an np array<br/>
    							rfint = struct.unpack(str(len(data)) + 'B', data)<br/>
    							npdata = np.array(rfint, dtype=np.byte)<br/>
    							</div>
					</BodyWrapper>
					<BodyWrapper>
							The data here is represented as 0 to 1 now that it is being formatted. 
							Now I need to distinguish which frequency has the strongest peak. I need to find the position and the magnitude.
							So first I take the fft of npdata which would return a real and imaginary value and I can use the formula:<br/>
							mag == sqrt(real^2 + img^2) to find the magnitude.<br/>
							Then for frequency it is calculated in multiple of <br/>(j)*DefaultSampleRate(sample rate of your playback device) divide by the data buffer size.<br/>
							Here for this project I want to send the peak of the bass value into the visualizer so if freq between 49 and 100 I would find the peak as i loop through j.
							Then i would encode this data and send to the micro-controller to visualize it. The value being return from the magnitude is within two bytes which is the same as rgb value that is going to be used by the micro-controller.
					</BodyWrapper>
					<HeaderWrapper>
							Closing
					</HeaderWrapper>
					<BodyWrapper>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/TcdnTDWDFbY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</BodyWrapper>
					<BodyWrapper>
						Visit my github for code to this project
					</BodyWrapper>
				</ContentWrapper>
			</ListWrapper>
		</AbsoluteWrapper>








	)
};

export default rgbSub;