import React from 'react';
import github from "../../assets/img/competence/github.webp"

const Github = () => {
	return (
		<section className="github_title" id="github">
		<h2 className="title">Github</h2>
		<div className="github_icone">
			<h3>Voici mon github</h3>
			<p>Vous retrouverez tous mes projets ainsi que mes futurs projets</p>
			<a href="https://github.com/"><img className="github_icone_img" alt="icone github" src={github} /></a>
                
            </div>
	</section>
	);
};

export default Github;