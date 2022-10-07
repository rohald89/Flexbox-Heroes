import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Tabs from '@radix-ui/react-tabs';
import Dropdown from '../../components/Dropdown';
import PageWrapper from '../../styles/PageWrapper';
import { changeProperty, changeFlexItemProperty } from '../../app/playgroundSlice';
import PlaygroundPreview from '../../components/Previews/PlaygroundPreview';
import PreviewWrapper from '../../components/Previews/PreviewWrapper';
import { TabsList, TabsRoot, TabsTrigger } from '../../styles/TabStyles';
import { setActiveTab } from '../../app/playgroundSlice';

export default function PlaygroundPage() {
  const { activeTab, styles, flexItems } = useSelector(state => state.playground);
  const dispatch = useDispatch();
console.log(activeTab);
  return (
    <div>
      <h1>Playground</h1>
      <PageWrapper>
        <div className="left">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
            <TabsRoot
              defaultValue='container'
              value={activeTab}
              onValueChange={
                (value) => dispatch(setActiveTab(value))
              }
            >
                <TabsList aria-label='element tabs'>
                    <TabsTrigger value="container">.container</TabsTrigger>
                    {
                        flexItems.map((item, index) => {
                            console.log(item);
                            return <TabsTrigger key={index} value={index}>{index + 1}</TabsTrigger>
                        })
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
                        <Tabs.Content key={index} value={index}>
                            <Dropdown
                                label="flex-grow"
                                options={['0', '1']}
                                value={item.flexGrow}
                                onChange={(value) => dispatch(changeFlexItemProperty({ property: 'flexGrow', value, index }))}
                            />
                            <Dropdown
                                label="flex-shrink"
                                options={['0', '1']}
                                value={item.flexShrink}
                                onChange={(value) => dispatch(changeFlexItemProperty({ property: 'flexShrink', value, index }))}
                            />
                            <Dropdown
                                label="flex-basis"
                                options={['auto', '0']}
                                value={item.flexBasis}
                                onChange={(value) => dispatch(changeFlexItemProperty({ property: 'flexBasis', value, index }))}
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
