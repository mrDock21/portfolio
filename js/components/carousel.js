'use strict';

class ProjectsViewer extends React.Component {
    constructor(props) {
        super(props);

        let project1 = {
            name:"Untitled dungeon game",
            desc: "An XCOM-like strategy game with a medieval theme.\nI contributed to the project with general programming, animations and UI.\nThe game itself supports single and multiplayer, with the latter been built entirely from scratch with PHP (for lobby synch) and Websocket Sharp (for gameplay synch).",
            coverImg: './img/untitled-medieval-game.png',
            imgs: [
                './img/untitled-medieval-game-0.png', 
                './img/untitled-medieval-game-1.PNG',
                './img/untitled-medieval-game-2.PNG',
                './img/untitled-medieval-game-3.PNG',
                './img/untitled-medieval-game-4.PNG',
                './img/untitled-medieval-game-5.png',
            ],
            gitLink: "#",
            gameLink: "https://mrdock21.itch.io/untitled-dungeon-game",
            madeWith: [ "Unity", "PHP", "C#", "Websocket sharp", "Blender"  ]
        };
        let project2 = {
            name:"Mass effect, but on the ps1",
            desc: "A tribute to Mass Effect. I made it in one week for the Retro Game Jam. I wanted to give it a survival horror vibe to make it more interesting, taking inspiration from, mainly, silent hill.",
            coverImg: './img/ME_PSX_cover.jpg',
            imgs: [
                './img/ME_PSX_Screen_1.png',
                './img/ME_PSX_Screen_2.png',
                './img/ME_PSX_Screen_3.png',
                './img/ME_PSX_Screen_4.png',
            ],
            gitLink: "#",
            gameLink: "https://mrdock21.itch.io/mass-effect-but-on-the-ps1",
            madeWith: [ "Unity", "C#", "Blender"  ]
        };
        let project3 = {
            name:"Pong AI",
            desc: "A small project that uses neural networks to play pong.\nThis project uses two AIs, each trained differently: one with a typical backpropagation algorithm, and another one using genetic algorithms.\nThe project consists of the two AIs playing against each other, trying to find out which one is the best Pong player.\nThe game itself was also done from scratch with Unity.",
            coverImg: './img/pong-ai-cover.jpg',
            imgs: [
                './img/pong-1.PNG',
                './img/pong-2.PNG',
                './img/pong-3.PNG',
                './img/pong-4.PNG'
            ],
            gitLink: "https://github.com/marteldelacruz/Pong-AI.git",
            gameLink: "#",
            madeWith: [ "Unity", "C#"  ]
        };

        this.state = {
            currProject: 0,
            currImg: 0,
            prevImg: 0,
            projects: [ project1, project2, project3 ],
            animating: false
        };

        this.constructTimeout(() => this.onChangeImage())
    }

    render() {
        const project = this.state.projects[this.state.currProject];
        const title = project.name;
        const desc = project.desc;
        const gitLink = project.gitLink;
        const gameLink = project.gameLink;
        const numTools = project.madeWith.length;
        const currImg = `url('${project.imgs[this.state.currImg]}'`;
        const prevImg = `url('${project.imgs[this.state.prevImg]}'`;
        
        const animating = this.state.animating;

        const projectDisplays = this.state.projects.map((proj, index) =>
            <div 
                key={ index } 
                className={`project-view ${ this.getProjectSelectedState(index) }`}
                onClick={ () => this.updateProject(index) }
                style={ { marginBottom: "1rem" } }>
                <div style={{ backgroundImage: `url('${ proj.coverImg }')` }}></div>
            </div>
        );

        const tools = project.madeWith.map((toolName, index) =>
            <li key={index}>
                <p className="desc-font"
                    style={ { marginBottom: ((index === numTools - 1) ? "0" : "1rem" ) } }>
                    { toolName }
                </p>
            </li>
        );

        return (
            <section id="projects-sec">
                <div id="projects-display" className="split p-1 flex-wrap">
                    { projectDisplays }
                </div>
                <div className="split" id="project-header">
                    <div className="project-btn" id="left-arrow"
                        onClick={ () => this.onChangeProject(-1) }>
                        &nbsp;
                    </div>
                    <div className="text-white">
                        <p className="m-0">{ title }</p>
                    </div>
                    <div className="project-btn"
                        onClick={ () => this.onChangeProject(1) }>
                        &nbsp;
                    </div>
                </div>
                <div id="project-ui">
                    <div id="project-cover" 
                        style={ { backgroundImage: currImg } }>

                        <div id="fake-img"
                             className={((animating) ? "fake-img-animate" : "")}
                             style={ { backgroundImage: prevImg } }
                             onAnimationEnd={ () => this.onAnimationDone() }>
                        
                        </div>

                    </div>
                </div>
                <div id="project-desc" className="p-1">
                    <p className="text-title m-0">{ title }</p>
                    <FormatText classes={"desc-font"} 
                                text={ desc } 
                                delimiter={'\n'}
                    />
                </div>
                <div id="project-links" className="split p-1">
                    <a className="link-btn text-red text-bold"
                        style={{ display: ((gitLink.length > 1) ? "block" : "none") }} 
                        href={ gitLink }>
                        <p className="m-0 text-title">
                            Git
                        </p>
                    </a>
                    <a className="link-btn text-red text-bold"
                        style={{ display: ((gameLink.length > 1) ? "block" : "none") }} 
                        href={ gameLink }>
                        <p className="m-0 text-title">
                            Try it out!
                        </p>
                    </a>
                </div>
                <div id="project-tech">
                    <div className="text-center">
                        <p className="text-title text-white m-0">Made with</p>
                    </div>
                    <div>
                        <ul id="tools-list" className="m-0">
                            { tools }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }

    updateProject(index) {
        var state = {...this.state};
        
        if (state.animating || state.currProject === index)
            return;

        state.currImg = state.prevImg = 0;
        state.currProject = index;
        state.animating = true;
        this.setState(state);
    }

    onChangeProject(dir) {
        var state = {...this.state};
        var index = state.currProject + dir;

        if (state.animating)
            return;

        if (index < 0)
            index = state.projects.length - 1
        else
            index = index % state.projects.length;

        this.updateProject(index);
    }

    onChangeImage() {
        var state = {...this.state};
        var index = state.currImg + 1;
        var project = state.projects[state.currProject];
        var images = project.imgs;

        if (!state.animating) {
            state.prevImg = state.currImg;
            state.currImg = index % images.length;
            state.animating = true;
            this.setState(state);
        }

        this.constructTimeout(() => this.onChangeImage());
    }

    onAnimationDone() {
        var state = {...this.state};
        state.animating = false;

        this.setState(state);
    }

    getProjectSelectedState(index) {
        if (this.state.currProject === index)
            return "project-view-selected";

        return "";
    }

    constructTimeout(onTimeout) {
        // await 5 seconds
        var awaitSeconds = 5;
        var id = window.setTimeout(onTimeout, awaitSeconds * 1000);
        return id;
    }
}

let domContainer = document.querySelector('#projects_container');
ReactDOM.render(<ProjectsViewer />, domContainer);