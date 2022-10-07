import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as Tabs from '@radix-ui/react-tabs';
import Dropdown from '../../components/Dropdown';
import PageWrapper from '../../styles/PageWrapper';
import { changeProperty } from '../../app/playgroundSlice';
import PlaygroundPreview from '../../components/Previews/PlaygroundPreview';
import PreviewWrapper from '../../components/Previews/PreviewWrapper';
import { TabsList, TabsRoot, TabsTrigger } from '../../styles/TabStyles';


export default function PlaygroundPage() {
  const { styles, flexItems } = useSelector(state => state.playground);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Playground</h1>
      <PageWrapper>
        <div className="left">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
            <TabsRoot defaultValue='container'>
                <TabsList aria-label='element tabs'>
                    <TabsTrigger value="container">.container</TabsTrigger>
                    {
                        flexItems.map((item, index) => (
                            <TabsTrigger key={index} value={`item-${index}`}>.item-{index}</TabsTrigger>
                        ))
                    }
                </TabsList>
                <Tabs.Content value="container">
                    <Dropdown
                        label="justify-content"
                        options={['flex-end', 'flex-start', 'center', 'space-between', 'space-around']}
                        value={styles.justifyContent}
                        onChange={(value) => dispatch(changeProperty({ property: 'justifyContent', value }))}
                    />
                    <Dropdown
                        label="align-items"
                        options={['flex-end', 'flex-start', 'center', 'stretch', 'baseline']}
                        value={styles.alignItems}
                        onChange={(value) => dispatch(changeProperty({ property: 'alignItems', value }))}
                    />
                    <Dropdown
                        label="flex-direction"
                        options={['row', 'row-reverse', 'column', 'column-reverse']}
                        value={styles.flexDirection}
                        onChange={(value) => dispatch(changeProperty({ property: 'flexDirection', value }))}
                    />
                </Tabs.Content>
                {
                    flexItems.map((item, index) => (
                        <Tabs.Content key={index} value={`item-${index}`}>
                            <Dropdown
                                label="flex-grow"
                                options={['0', '1']}
                                value={item.flexGrow}
                                onChange={(value) => dispatch(changeProperty({ property: 'flexGrow', value, index }))}
                            />
                            <Dropdown
                                label="flex-shrink"
                                options={['0', '1']}
                                value={item.flexShrink}
                                onChange={(value) => dispatch(changeProperty({ property: 'flexShrink', value, index }))}
                            />
                            <Dropdown
                                label="flex-basis"
                                options={['auto', '0']}
                                value={item.flexBasis}
                                onChange={(value) => dispatch(changeProperty({ property: 'flexBasis', value, index }))}
                            />
                        </Tabs.Content>
                    ))
                }
            </TabsRoot>

        </div>
        <div className="right">
            <PreviewWrapper>
                <PlaygroundPreview />
            </PreviewWrapper>
        </div>
      </PageWrapper>
    </div>
  );
}
