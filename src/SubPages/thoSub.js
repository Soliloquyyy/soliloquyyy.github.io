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

function thoSub(){
	return(
		<AbsoluteWrapper>
			<ListWrapper>
				<ContentWrapper>
					<TitleHeaderWrapper>
						ThoBot, A Multipurpose Discord Bot.
					</TitleHeaderWrapper>
					<HeaderWrapper>
						Remake
					</HeaderWrapper>	
						<BodyWrapper>
							I have recently remade the bot from scratch with better implementation on dynamic commands and better
							data storage reddit tracker using mariaDB. 
						</BodyWrapper>
					<HeaderWrapper>
						Main
					</HeaderWrapper>	
					<BodyWrapper>
						ThoBot is a Multipurpose Discord Bot that was originally designed for Discord community management.
						It originally has feature such as automated roles giving, reminders and minor chat enhancement. It has since evolved into becoming Multipurpose and includes features such as
						profile getter, chat games such as 2048 and connect four(chess is under consideration), YouTube API intergration such as querying for videos, osu! API integration such as tracking and getting beatmaps
						and automated reddit tracking system that post posts from any subreddits.						
					</BodyWrapper>
					<HeaderWrapper>
						Code and Demonstration
					</HeaderWrapper>
					<BodyWrapper>
						Code is posted on my github. Demonstration will be added soon.
					</BodyWrapper>
				</ContentWrapper>
			</ListWrapper>
		</AbsoluteWrapper>
	)
};

export default thoSub;