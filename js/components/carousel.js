'use strict';

class ProjectsViewer extends React.Component {
    constructor(props) {
        super(props);

        let project1 = {
            name:"Untitled dungeon game",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, impedit quasi aspernatur culpa debitis odio rerum? Cum accusantium unde animi!",
            imgs: [
                'https://i.imgur.com/uTElq.png', 
                'https://i.kym-cdn.com/entries/icons/original/000/033/293/john.jpg',
                'https://spoiler.bolavip.com/__export/1618424601588/sites/bolavip/img/2021/04/14/los_mejores_memes_de_la_participacixn_de_john_cena_en_venga_la_alegrxa_crop1618424599768.jpg_423682103.jpg',
                'https://vignette.wikia.nocookie.net/15024d98-02ae-40a0-876e-04e7abbac87c/scale-to-width-down/1200'
            ],
            gitLink: "#",
            gameLink: "#",
            madeWith: [ "Unity", "PHP", "C#", "Blender"  ]
        };
        let project2 = {
            name:"Shrek the game",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, impedit quasi aspernatur culpa debitis odio rerum? Cum accusantium unde animi!",
            imgs: [
                'https://3.bp.blogspot.com/-7dWkJ2oulFw/XKv0-xeqnZI/AAAAAAAABcs/1Juss_qSaYgqpKKnuzFn9C5kIeDBZmBdwCEwYBhgL/s1600/shrek1.jpg', 
                'https://gameslatam.com/wp-content/uploads/2021/05/shrek4_disneyscreencaps.com_675.jpg',
                'https://www.latercera.com/resizer/aR12AyV89gsCQhVThI8ARy6cB-c=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/7SQF547PLZGCVITB4YYYL526N4.jpg',
                'https://i2.wp.com/cinefilosoficial.com/wp-content/uploads/2021/03/meme-shrek.jpg?resize=1024%2C597'
            ],
            gitLink: "#",
            gameLink: "#",
            madeWith: [ "Unity", "PHP", "C#", "Blender"  ]
        };

        this.state = {
            currProject: 0,
            currImg: 0,
            prevImg: 0,
            projects: [ project1, project2 ],
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

        const tools = project.madeWith.map((toolName, index) =>
            <li key={index}>
                <p className={((index === numTools - 1) ? "m-0" : "" )}>
                    { toolName }
                </p>
            </li>
        );

        return (
            <section id="projects-sec">
                <div id="projects-display" className="split p-1">
                    <div className={`project-view ${ this.getProjectSelectedState(0) }`}
                         onClick={ () => this.updateProject(0) }>
                        <div style={{ backgroundImage: "url('https://static.wikia.nocookie.net/cod/images/9/9b/Call_of_Duty_Ghosts_cover.jpg/revision/latest?cb=20130610211018&path-prefix=es')" }}></div>

                    </div>
                    <div className={`project-view ${ this.getProjectSelectedState(1) }`}
                         onClick={ () => this.updateProject(1) }>
                        <div style={{ backgroundImage: "url('https://www.rockstargames.com/V/img/global/order/GTAV-PC.jpg')" }}></div>
                    
                    </div>
                    <div className={`project-view ${ this.getProjectSelectedState(2) }`}
                         onClick={ () => this.updateProject(2) }>
                        <div style={{ backgroundImage: "url('https://blogdesuperheroes.es/imagen-noti/Bill-Finger-Original_avatar_1474054653.jpg')" }}></div>
                    
                    </div>
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
                    <p>{ desc }</p>
                </div>
                <div id="project-links" className="split p-1">
                    <a className="link-btn text-red text-bold" href={ gitLink }>
                        <p className="m-0 text-title">
                            Git
                        </p>
                    </a>
                    <a className="link-btn text-red text-bold" href={ gameLink }>
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
                        <ul className="m-0">
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