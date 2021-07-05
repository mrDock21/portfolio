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
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, impedit quasi aspernatur culpa debitis odio rerum? Cum accusantium unde animi!",
            imgs: ['https://i.imgur.com/uTElq.png', 'https://i.kym-cdn.com/entries/icons/original/000/033/293/john.jpg', 'https://spoiler.bolavip.com/__export/1618424601588/sites/bolavip/img/2021/04/14/los_mejores_memes_de_la_participacixn_de_john_cena_en_venga_la_alegrxa_crop1618424599768.jpg_423682103.jpg', 'https://vignette.wikia.nocookie.net/15024d98-02ae-40a0-876e-04e7abbac87c/scale-to-width-down/1200'],
            gitLink: "#",
            gameLink: "#",
            madeWith: ["Unity", "PHP", "C#", "Blender"]
        };
        var project2 = {
            name: "Shrek the game",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, impedit quasi aspernatur culpa debitis odio rerum? Cum accusantium unde animi!",
            imgs: ['https://3.bp.blogspot.com/-7dWkJ2oulFw/XKv0-xeqnZI/AAAAAAAABcs/1Juss_qSaYgqpKKnuzFn9C5kIeDBZmBdwCEwYBhgL/s1600/shrek1.jpg', 'https://gameslatam.com/wp-content/uploads/2021/05/shrek4_disneyscreencaps.com_675.jpg', 'https://www.latercera.com/resizer/aR12AyV89gsCQhVThI8ARy6cB-c=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/7SQF547PLZGCVITB4YYYL526N4.jpg', 'https://i2.wp.com/cinefilosoficial.com/wp-content/uploads/2021/03/meme-shrek.jpg?resize=1024%2C597'],
            gitLink: "#",
            gameLink: "#",
            madeWith: ["Unity", "PHP", "C#", "Blender"]
        };

        _this.state = {
            currProject: 0,
            currImg: 0,
            prevImg: 0,
            projects: [project1, project2],
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

            var tools = project.madeWith.map(function (toolName, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    React.createElement(
                        "p",
                        { className: index === numTools - 1 ? "m-0" : "" },
                        toolName
                    )
                );
            });

            return React.createElement(
                "section",
                { id: "projects-sec" },
                React.createElement(
                    "div",
                    { id: "projects-display", className: "split p-1" },
                    React.createElement(
                        "div",
                        { className: "project-view " + this.getProjectSelectedState(0),
                            onClick: function onClick() {
                                return _this2.updateProject(0);
                            } },
                        React.createElement("div", { style: { backgroundImage: "url('https://static.wikia.nocookie.net/cod/images/9/9b/Call_of_Duty_Ghosts_cover.jpg/revision/latest?cb=20130610211018&path-prefix=es')" } })
                    ),
                    React.createElement(
                        "div",
                        { className: "project-view " + this.getProjectSelectedState(1),
                            onClick: function onClick() {
                                return _this2.updateProject(1);
                            } },
                        React.createElement("div", { style: { backgroundImage: "url('https://www.rockstargames.com/V/img/global/order/GTAV-PC.jpg')" } })
                    ),
                    React.createElement(
                        "div",
                        { className: "project-view " + this.getProjectSelectedState(2),
                            onClick: function onClick() {
                                return _this2.updateProject(2);
                            } },
                        React.createElement("div", { style: { backgroundImage: "url('https://blogdesuperheroes.es/imagen-noti/Bill-Finger-Original_avatar_1474054653.jpg')" } })
                    )
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
                    React.createElement(
                        "p",
                        null,
                        desc
                    )
                ),
                React.createElement(
                    "div",
                    { id: "project-links", className: "split p-1" },
                    React.createElement(
                        "a",
                        { className: "link-btn text-red text-bold", href: gitLink },
                        React.createElement(
                            "p",
                            { className: "m-0 text-title" },
                            "Git"
                        )
                    ),
                    React.createElement(
                        "a",
                        { className: "link-btn text-red text-bold", href: gameLink },
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
                            { className: "m-0" },
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