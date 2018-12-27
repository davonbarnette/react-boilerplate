import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import {Flex} from "../Flex/Flex";
import Button from "../Button/Button";
import {Scrollable} from "../Scrollable/Scrollable";
import SearchSelect from "../SearchSelect";
import {ItemsListItemType} from "./Types";

interface ItemsListProps {
    onAddClick:()=>void,
    items?:ItemsListItemType[],
    itemName:string,
}

interface ItemsListState {
    termFilters:string[],
}

class ItemsList extends Component<ItemsListProps,ItemsListState> {

    constructor(props:ItemsListProps){
        super(props);
        this.state = {
            termFilters:[],
        }
    }

    onTermsChange = (termFilters:string[]) => {
        this.setState({termFilters});
    };

    get items() {
        const { items } = this.props;
        if (!items) return null;
        const {termFilters} = this.state;

        let itemsToRender = items;

        if (termFilters.length !== 0) itemsToRender =
            items.filter((item: ItemsListItemType) => {
                for (let i = 0; i < termFilters.length; i++) {
                    const termFilter = termFilters[i];
                    if (item.value.toLowerCase().indexOf(termFilter.toLowerCase()) !== -1) return true;
                }
                return false;
            });

        return itemsToRender.map((item:ItemsListItemType) => {
            return item.component
        });
    }

    render() {
        const { onAddClick, itemName } = this.props;

        return (
            <div className='items-list'>
                <SearchSelect className='search-items' searchKey={`${itemName}-list-search`} onChange={this.onTermsChange}/>
                <Scrollable scrollY>
                    <Flex className='items' flexDirection='column' justifyContent='flex-start'>
                        {this.items}
                    </Flex>
                </Scrollable>
                <div className='add-item'>
                    <Button onClick={onAddClick} enabled={true}>
                        CREATE {itemName.toUpperCase()}
                    </Button>
                </div>
            </div>
        )
    }
}

export default observer(ItemsList);