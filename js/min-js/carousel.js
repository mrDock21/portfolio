'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectsViewer = function (_React$Component) {
    _inherits(ProjectsViewer, _React$Component);

    function ProjectsViewer(props) {
        _classCallCheck(this, ProjectsViewer);

        var _this = _possibleConstructorReturn(this, (ProjectsViewer.__proto__ || Object.getPrototypeOf(ProjectsViewer)).call(this, props));

        var project1 = {
            name: "Untitled dungeon game",
            desc: "An XCOM-like strategy game with a medieval theme.\nI contributed to the project with general programming, animations and UI.\nThe game itself supports single and multiplayer, with the latter been built entirely from scratch with PHP (for lobby synch) and Websocket Sharp (for gameplay synch).",
            coverImg: './img/untitled-medieval-game.png',
            imgs: ['./img/untitled-medieval-game-0.png', './img/untitled-medieval-game-1.PNG', './img/untitled-medieval-game-2.PNG', './img/untitled-medieval-game-3.PNG', './img/untitled-medieval-game-4.PNG', './img/untitled-medieval-game-5.png'],
            gitLink: "#",
            gameLink: "https://mrdock21.itch.io/untitled-dungeon-game",
            madeWith: ["Unity", "PHP", "C#", "Websocket sharp", "Blender"]
        };
        var project2 = {
            name: "Mass effect, but on the ps1",
            desc: "A tribute to Mass Effect. I made it in one week for the Retro Game Jam. I wanted to give it a survival horror vibe to make it more interesting, taking inspiration from, mainly, silent hill.",
            coverImg: './img/ME_PSX_cover.jpg',
            imgs: ['./img/ME_PSX_Screen_1.png', './img/ME_PSX_Screen_2.png', './img/ME_PSX_Screen_3.png', './img/ME_PSX_Screen_4.png'],
            gitLink: "#",
            gameLink: "https://mrdock21.itch.io/mass-effect-but-on-the-ps1",
            madeWith: ["Unity", "C#", "Blender"]
        };
        var project3 = {
            name: "Pong AI",
            desc: "A small project that uses neural networks to play pong.\nThis project uses two AIs, each trained differently: one with a typical backpropagation algorithm, and another one using genetic algorithms.\nThe project consists of the two AIs playing against each other, trying to find out which one is the best Pong player.\nThe game itself was also done from scratch with Unity.",
            coverImg: './img/pong-ai-cover.jpg',
            imgs: ['./img/pong-1.PNG', './img/pong-2.PNG', './img/pong-3.PNG', './img/pong-4.PNG'],
            gitLink: "https://github.com/marteldelacruz/Pong-AI.git",
            gameLink: "#",
            madeWith: ["Unity", "C#"]
        };

        _this.state = {
            currProject: 0,
            currImg: 0,
            prevImg: 0,
            projects: [project1, project2, project3],
            animating: false
        };

        _this.constructTimeout(function () {
            return _this.onChangeImage();
        });
        return _this;
    }

    _createClass(ProjectsViewer, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var project = this.state.projects[this.state.currProject];
            var title = project.name;
            var desc = project.desc;
            var gitLink = project.gitLink;
            var gameLink = project.gameLink;
            var numTools = project.madeWith.length;
            var currImg = "url('" + project.imgs[this.state.currImg] + "'";
            var prevImg = "url('" + project.imgs[this.state.prevImg] + "'";

            var animating = this.state.animating;

            var projectDisplays = this.state.projects.map(function (proj, index) {
                return React.createElement(
                    "div",
                    {
                        key: index,
                        className: "project-view " + _this2.getProjectSelectedState(index),
                        onClick: function onClick() {
                            return _this2.updateProject(index);
                        },
                        style: { marginBottom: "1rem" } },
                    React.createElement("div", { style: { backgroundImage: "url('" + proj.coverImg + "')" } })
                );
            });

            var tools = project.madeWith.map(function (toolName, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    React.createElement(
                        "p",
                        { className: "desc-font",
                            style: { marginBottom: index === numTools - 1 ? "0" : "1rem" } },
                        toolName
                    )
                );
            });

            return React.createElement(
                "section",
                { id: "projects-sec" },
                React.createElement(
                    "div",
                    { id: "projects-display", className: "split p-1 flex-wrap" },
                    projectDisplays
                ),
                React.createElement(
                    "div",
                    { className: "split", id: "project-header" },
                    React.createElement(
                        "div",
                        { className: "project-btn", id: "left-arrow",
                            onClick: function onClick() {
                                return _this2.onChangeProject(-1);
                            } },
                        "\xA0"
                    ),
                    React.createElement(
                        "div",
                        { className: "text-white" },
                        React.createElement(
                            "p",
                            { className: "m-0" },
                            title
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "project-btn",
                            onClick: function onClick() {
                                return _this2.onChangeProject(1);
                            } },
                        "\xA0"
                    )
                ),
                React.createElement(
                    "div",
                    { id: "project-ui" },
                    React.createElement(
                        "div",
                        { id: "project-cover",
                            style: { backgroundImage: currImg } },
                        React.createElement("div", { id: "fake-img",
                            className: animating ? "fake-img-animate" : "",
                            style: { backgroundImage: prevImg },
                            onAnimationEnd: function onAnimationEnd() {
                                return _this2.onAnimationDone();
                            } })
                    )
                ),
                React.createElement(
                    "div",
                    { id: "project-desc", className: "p-1" },
                    React.createElement(
                        "p",
                        { className: "text-title m-0" },
                        title
                    ),
                    React.createElement(FormatText, { classes: "desc-font",
                        text: desc,
                        delimiter: '\n'
                    })
                ),
                React.createElement(
                    "div",
                    { id: "project-links", className: "split p-1" },
                    React.createElement(
                        "a",
                        { className: "link-btn text-red text-bold",
                            style: { display: gitLink.length > 1 ? "block" : "none" },
                            href: gitLink },
                        React.createElement(
                            "p",
                            { className: "m-0 text-title" },
                            "Git"
                        )
                    ),
                    React.createElement(
                        "a",
                        { className: "link-btn text-red text-bold",
                            style: { display: gameLink.length > 1 ? "block" : "none" },
                            href: gameLink },
                        React.createElement(
                            "p",
                            { className: "m-0 text-title" },
                            "Try it out!"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { id: "project-tech" },
                    React.createElement(
                        "div",
                        { className: "text-center" },
                        React.createElement(
                            "p",
                            { className: "text-title text-white m-0" },
                            "Made with"
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "ul",
                            { id: "tools-list", className: "m-0" },
                            tools
                        )
                    )
                )
            );
        }
    }, {
        key: "updateProject",
        value: function updateProject(index) {
            var state = Object.assign({}, this.state);

            if (state.animating || state.currProject === index) return;

            state.currImg = state.prevImg = 0;
            state.currProject = index;
            state.animating = true;
            this.setState(state);
        }
    }, {
        key: "onChangeProject",
        value: function onChangeProject(dir) {
            var state = Object.assign({}, this.state);
            var index = state.currProject + dir;

            if (state.animating) return;

            if (index < 0) index = state.projects.length - 1;else index = index % state.projects.length;

            this.updateProject(index);
        }
    }, {
        key: "onChangeImage",
        value: function onChangeImage() {
            var _this3 = this;

            var state = Object.assign({}, this.state);
            var index = state.currImg + 1;
            var project = state.projects[state.currProject];
            var images = project.imgs;

            if (!state.animating) {
                state.prevImg = state.currImg;
                state.currImg = index % images.length;
                state.animating = true;
                this.setState(state);
            }

            this.constructTimeout(function () {
                return _this3.onChangeImage();
            });
        }
    }, {
        key: "onAnimationDone",
        value: function onAnimationDone() {
            var state = Object.assign({}, this.state);
            state.animating = false;

            this.setState(state);
        }
    }, {
        key: "getProjectSelectedState",
        value: function getProjectSelectedState(index) {
            if (this.state.currProject === index) return "project-view-selected";

            return "";
        }
    }, {
        key: "constructTimeout",
        value: function constructTimeout(onTimeout) {
            // await 5 seconds
            var awaitSeconds = 5;
            var id = window.setTimeout(onTimeout, awaitSeconds * 1000);
            return id;
        }
    }]);

    return ProjectsViewer;
}(React.Component);

var domContainer = document.querySelector('#projects_container');
ReactDOM.render(React.createElement(ProjectsViewer, null), domContainer);