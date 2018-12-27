import React, {Component} from 'react';
import BrowserRouter from "../../../data/Routers/BrowserRouter";
import {RouteComponentProps, withRouter} from "react-router";
import cx from 'classnames';

import './styles.scss';

import {SingleHeaderItem} from "./types";
import {Flex} from "../Flex/Flex";

interface NavButtonProps {
    onClick:(e:MouseEvent)=>void,
    label:string,
    selected:boolean,
    icon?:any,
}

const NavButton = (props:NavButtonProps) => {
    const { onClick, label, selected, icon } = props;
    let color = selected ? '#5d84e4' : '#cccccc';

    let className = cx('navigate-to', { selected });
    let containerArgs = { className, onClick };
    return (
        <span {...containerArgs as any} >
            {icon ? icon(color) : null}
            <div className='text'>{label}</div>
        </span>
    )
};

interface HeaderProps extends RouteComponentProps {
    headerItems:SingleHeaderItem[]
}

class Header extends Component<HeaderProps, any> {

    handleOnNavigateClick = (e:MouseEvent,path:string) => {
        e.stopPropagation();
        BrowserRouter.push(path);
    };

    isCurrentPath(path:string){
        const { pathname } = this.props.location;
        return pathname.startsWith(path);
    }

    get navItems() {

        const {headerItems} = this.props;

        return headerItems.map((item:SingleHeaderItem, key:number) => {
            const { path, label, icon } = item;

            let onClick = (e:MouseEvent) => this.handleOnNavigateClick(e, path);
            let selected = this.isCurrentPath(path);
            let args = {key, onClick, selected, icon, label};

            return <NavButton {...args}/>
        })
    }

    render(){
        return(
            <section className='header-component'>
                <Flex className='left-nav'>
                     <span className='second'>example</span>&nbsp;<span>page</span>
                </Flex>
                <Flex className='right-nav' flexDirection='row' justifyContent='flex-end' alignItems='center'>
                    {this.navItems}
                </Flex>
            </section>

        )
    }
}

export default withRouter(Header);