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

function dNcSub(){
	return (
		<AbsoluteWrapper>
			<ListWrapper>
				<ContentWrapper>
					<TitleHeaderWrapper>
						Document Generator and Autocomplete words
					</TitleHeaderWrapper>
					<HeaderWrapper>
						Introduction
					</HeaderWrapper>
					<BodyWrapper>
						For Document Generator, we use markov chain stochastic model to generate a document using a preexisting document.
						It predicts the next words based on probability from the input document and then generate a new one.
						For Autocomplete, we use a multiway trie to predicts the ending of any prefix inputed. We need an input list of words
						for the autocomplete prediction.
					</BodyWrapper>
					<HeaderWrapper>
						Main
					</HeaderWrapper>
					<BodyWrapper>
						For document generator we keep track of the string and its next occurences strings(not in unique order). Then we can generate next word
						by just taking a random index from those next words and put it there. Otherwise we would put a period if there is no next words.
						Of course, we also need to parse in the original document.
						For Autocomplete, we build a Multiway Trie with children of the next completed words and its own occurence. We build MWT normally unless we find
						a duplicate we just increment its occurences. Then we can predict the top ten completion by searching through the trie and for each child
						in current node children we can find its top 10 autofill and push it to a vector and sort them all at the end and return the sorted top 10 most occured.
					</BodyWrapper>
				</ContentWrapper>
			</ListWrapper>
		</AbsoluteWrapper>


	)
};

export default dNcSub;