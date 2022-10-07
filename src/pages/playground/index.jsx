import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import PageWrapper from '../../styles/PageWrapper';
import { changeProperty, changeFlexItemProperty, resetPlayground, generateCode } from '../../app/playgroundSlice';
import PlaygroundPreview from '../../components/Previews/PlaygroundPreview';
import PreviewWrapper from '../../components/Previews/PreviewWrapper';
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../../styles/TabStyles';
import { setActiveTab, addFlexItem } from '../../app/playgroundSlice';
import { PlusCircledIcon, ResetIcon, CodeIcon } from '@radix-ui/react-icons';
import PreviewHeader from '../../components/Previews/PreviewHeader';
import { Button, ButtonContainer } from '../../styles/ButtonStyles';
import CodeModal from '../../components/CodeModal';


export default function PlaygroundPage() {
  const { activeTab, styles, flexItems } = useSelector(state => state.playground);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFlexItem());
  }

  const handleReset = () => {
    dispatch(resetPlayground());
  };

  const handleCode = () => {
    dispatch(generateCode());
    console.log('code');
  }

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
                            return <TabsTrigger key={index} value={index}>{`.item-${index + 1}`}</TabsTrigger>
                        })
                    }
                </TabsList>
                <TabsContent value="container">
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
                </TabsContent>
                {
                    flexItems.map((item, index) => (
                        <TabsContent key={index} value={index}>
                            <Dropdown
                                label="flex-grow"
                                options={['0', '1']}
                                value={item.styles.flexGrow}
                                onChange={(value) => dispatch(changeFlexItemProperty({ property: 'flexGrow', value, index }))}
                            />
                            <Dropdown
                                label="flex-shrink"
                                options={['0', '1']}
                                value={item.styles.flexShrink}
                                onChange={(value) => dispatch(changeFlexItemProperty({ property: 'flexShrink', value, index }))}
                            />
                            <Dropdown
                                label="flex-basis"
                                options={['auto', '0']}
                                value={item.styles.flexBasis}
                                onChange={(value) => dispatch(changeFlexItemProperty({ property: 'flexBasis', value, index }))}
                            />
                        </TabsContent>
                    ))
                }

            </TabsRoot>

        </div>
        <div className="right">
            <PreviewHeader>
                <ButtonContainer>
                    <Button aria-label="Reset" onClick={handleReset}><ResetIcon /></Button>
                    <Button aria-label="Add FlexItem" onClick={handleClick}><PlusCircledIcon /></Button>
                    <Button aria-label="Get CSS" onClick={handleCode}><CodeIcon /></Button>
                    <CodeModal />
                </ButtonContainer>
            </PreviewHeader>
            <PreviewWrapper>
                <PlaygroundPreview />
            </PreviewWrapper>
        </div>
      </PageWrapper>
    </div>
  );
}
