import React, { useEffect, useState } from 'react';
import styles from './Project.module.css'
import Project from './Project'

import PortifolioWeb from "../../assets/portifolioWeb.png"
import RegisterApp from "../../assets/RegisterApp.png"
import ToDoApp from "../../assets/ToDoApp.png"
import PythonfreeCode from "../../assets/Python_Projects.png"

export default function ProjectSection(){

    // Project list
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
        try {
            const username = 'Davidfrank1999';
            const repoNames = ['david-portfolio', 'ReactNative_ToDoApp', 'ReactNative_RegisterApp', 'bioinformatics', 'python_freecodecamp', 'front_end']; // Replace with your repository names
            const repoImg = [PortifolioWeb,RegisterApp,ToDoApp,
                'https://repository-images.githubusercontent.com/790111308/54bd1933-8e59-4b0e-86e3-32f088c965d9',
                PythonfreeCode,
                'https://i.pinimg.com/564x/17/22/24/1722244094738967b5c0b748e92571bf.jpg']

            const repoData = await Promise.all(repoNames.map(async (repoName, index) => {
                const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
                if (!response.ok){
                    throw new Error('Failed to fetch repo: ${repoName}');
                }
                const repo = await response.json();
                return {
                    ...repo,
                    image: repoImg[index] // Replace with actual image path
                };
            }));

            setRepos(repoData);
        }catch (error) {
            console.error("Error fetching repositories:", error);
        }
        };

        fetchRepos();
    }, []);


    return(
        <section id="ProjectSection" className={styles.ProjectContainer}>
            <div className={styles.headingDiv}>
                <h3 className={styles.ProjectSecTitle}>Project Collections</h3>
            </div>
            {repos.map(repo => (
                    <Project key={repo.id} repo={repo} />
                ))}
        </section>
    )
}
