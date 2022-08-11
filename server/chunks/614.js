"use strict";
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layouts_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./utils/ActiveLink.js




const ActiveLink = ({ router , children , ...props })=>{
    const child = external_react_.Children.only(children);
    let className = child.props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }
    delete props.activeClassName;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        ...props,
        children: /*#__PURE__*/ external_react_default().cloneElement(child, {
            className
        })
    }));
};
/* harmony default export */ const utils_ActiveLink = ((0,router_.withRouter)(ActiveLink));

;// CONCATENATED MODULE: ./components/Layouts/Navbar.js



class Navbar extends external_react_.Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = ()=>{
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        const { collapsed  } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "navbar",
                className: "navbar-area",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "navbar navbar-expand-md navbar-light",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "navbar-brand",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://assets.rumsan.com/rumsan-group/rumsanlogo3x2.png",
                                        alt: "logo",
                                        style: {
                                            width: '150px'
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: this.toggleNavbar,
                                className: classTwo,
                                type: "button",
                                "data-toggle": "collapse",
                                "data-target": "#navbarSupportedContent",
                                "aria-controls": "navbarSupportedContent",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon-bar top-bar"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon-bar middle-bar"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon-bar bottom-bar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: classOne,
                                id: "navbarSupportedContent",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "navbar-nav",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    children: "Product"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                                href: "/#features",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    children: "Features"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                                href: "/#aboutUs",
                                                activeClassName: "active",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    children: "About us"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                                href: "#pricing",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    children: "Pricing"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                                href: "/#contactUs",
                                                activeClassName: "active",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    children: "Contact Us"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        }));
    }
}
/* harmony default export */ const Layouts_Navbar = (Navbar);


/***/ })

};
;