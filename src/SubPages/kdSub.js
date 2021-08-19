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

function kdSub(){
	return(
		<AbsoluteWrapper>
			<ListWrapper>
				<ContentWrapper>
					<TitleHeaderWrapper>
						KD Tree implementation using BST
					</TitleHeaderWrapper>
					<HeaderWrapper>
						Introduction
					</HeaderWrapper>
					<BodyWrapper>
						We can construct a KD tree using a BST with C++ template. We can have a class called point, in which we can have n-dimensional data
						in it. We can then insert it into the BST while adding some helper functions for KD-Tree itself such as build and find nearest neighbor.
					</BodyWrapper>
					<HeaderWrapper>
						Main
					</HeaderWrapper>
					<BodyWrapper>
						First we need to construct a BST with template. Which is fairly easy and self-explainatory.
						Then we create a new KDTree class that extend a BST with a "Point" class data type.
						Point can have coordinate data in how ever many dimension we want. For simplicity case this will deal with 2D.
						Then we can build the Tree using these steps: <br/>
							Input: list of item, start, end, dimension<br/>
        				 	 * Output: root of subtree<br/>
					         * BuildRecurse:<br/>
					         *  Sort items from start to (end - 1) over dimension<br/>
					         *  Select (leftmost) median for index mid<br/>
					         *  Create node p using median<br/>
					         *  p->left = BuildRecurse(list, start, mid, toggle_dim)<br/>
					         *  p->right = BuildRecurse(list, mid+1, end, toggle_dim)<br/>
					         *  return p<br/>
					    We also need to implement find nearest neightbor. Which is just going down the tree checking the distance and finding the minimal.
					    Here we use DFS with stack and toggle between x and y value to check the next point. and We would mark the lowest distanced one and return it.
					</BodyWrapper>

					<HeaderWrapper>
						Closing
					</HeaderWrapper>

					<BodyWrapper>
						Demonstration will be posted soon. Email me if you would like to see the code.
					</BodyWrapper>
				</ContentWrapper>
			</ListWrapper>
		</AbsoluteWrapper>
	);
};

export default kdSub;