import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import PageWrapper from '../../styles/PageWrapper';
import {
  changeProperty,
  changeFlexItemProperty,
  resetPlayground,
  generateCode,
} from '../../app/playgroundSlice';
import PlaygroundPreview from '../../components/Previews/PlaygroundPreview';
import PreviewWrapper from '../../components/Previews/PreviewWrapper';
import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from '../../styles/TabStyles';
import { setActiveTab, addFlexItem } from '../../app/playgroundSlice';
import { PlusCircledIcon, ResetIcon, CodeIcon } from '@radix-ui/react-icons';
import PreviewHeader from '../../components/Previews/PreviewHeader';
import { Button, ButtonContainer } from '../../styles/ButtonStyles';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import OverflowWarning from '../../components/OverflowWarning';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function PlaygroundPage() {
  const { activeTab, styles, flexItems, generatedCSS, generatedHTML } =
    useSelector((state) => state.playground);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFlexItem());
  };

  const handleReset = () => {
    dispatch(resetPlayground());
  };

  return (
    <div>
      <h1>Playground</h1>
      <PageWrapper>
        <div className="left">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
          <TabsRoot
            defaultValue="container"
            value={activeTab}
            onValueChange={(value) => dispatch(setActiveTab(value))}
          >
            <TabsList aria-label="element tabs">
              <TabsTrigger value="container">.container</TabsTrigger>
              {flexItems.map((item, index) => (
                <TabsTrigger key={index} value={index}>{`.item-${
                  index + 1
                }`}</TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="container">
              <Dropdown
                label="justify-content"
                property="justifyContent"
                options={[
                  'flex-end',
                  'flex-start',
                  'center',
                  'space-between',
                  'space-around',
                ]}
                value={styles.justifyContent}
                onChange={(value) =>
                  dispatch(
                    changeProperty({ property: 'justifyContent', value })
                  )
                }
              />
              <Dropdown
                label="align-items"
                property="alignItems"
                options={[
                  'flex-end',
                  'flex-start',
                  'center',
                  'stretch',
                  'baseline',
                ]}
                value={styles.alignItems}
                onChange={(value) =>
                  dispatch(changeProperty({ property: 'alignItems', value }))
                }
              />
              <Dropdown
                label="flex-direction"
                property="flexDirection"
                options={['row', 'row-reverse', 'column', 'column-reverse']}
                value={styles.flexDirection}
                onChange={(value) =>
                  dispatch(changeProperty({ property: 'flexDirection', value }))
                }
              />
              <Dropdown
                label="flex-wrap"
                property="flexWrap"
                options={['nowrap', 'wrap', 'wrap-reverse']}
                value={styles.flexWrap}
                onChange={(value) =>
                  dispatch(changeProperty({ property: 'flexWrap', value }))
                }
              />
              <Slider
                label="gap"
                min={0}
                max={100}
                // TODO Add dropdown for px, em, rem, % values
                value={[`${styles.gap.split('px')[0]}`]}
                onValueChange={(value) =>
                  dispatch(
                    changeProperty({ property: 'gap', value: `${value}px` })
                  )
                }
              />
            </TabsContent>
            {flexItems.map((item, index) => (
              <TabsContent key={index} value={index}>
                <Dropdown
                  index={index}
                  label="flex-grow"
                  options={['0', '1']}
                  property="flexGrow"
                  value={item.styles.flexGrow}
                  onChange={(value) =>
                    dispatch(
                      changeFlexItemProperty({
                        property: 'flexGrow',
                        value,
                        index,
                      })
                    )
                  }
                />
                <Dropdown
                  index={index}
                  label="flex-shrink"
                  options={['0', '1']}
                  property="flexShrink"
                  value={item.styles.flexShrink}
                  onChange={(value) =>
                    dispatch(
                      changeFlexItemProperty({
                        property: 'flexShrink',
                        value,
                        index,
                      })
                    )
                  }
                />
                <Dropdown
                  index={index}
                  label="flex-basis"
                  options={['auto', '0']}
                  property="flexBasis"
                  value={item.styles.flexBasis}
                  onChange={(value) =>
                    dispatch(
                      changeFlexItemProperty({
                        property: 'flexBasis',
                        value,
                        index,
                      })
                    )
                  }
                />
                <Slider
                  index={index}
                  label="width"
                  min={0}
                  max={200}
                  // TODO Add dropdown for px, em, rem, % values
                  value={[`${item.styles.width.split('px')[0]}`]}
                  onValueChange={(value) =>
                    dispatch(
                      changeFlexItemProperty({
                        property: 'width',
                        value: `${value}px`,
                        index,
                      })
                    )
                  }
                />
                <Slider
                  index={index}
                  label="height"
                  min={0}
                  max={200}
                  // TODO Add dropdown for px, em, rem, % values
                  value={[`${item.styles.height.split('px')[0] || 0}`]}
                  onValueChange={(value) =>
                    dispatch(
                      changeFlexItemProperty({
                        property: 'height',
                        value: `${value}px`,
                        index,
                      })
                    )
                  }
                />
              </TabsContent>
            ))}
          </TabsRoot>
        </div>
        <div className="right">
          <PreviewHeader>
            <ButtonContainer>
              <Button aria-label="Reset" onClick={handleReset}>
                <ResetIcon />
              </Button>
              <Button aria-label="Add FlexItem" onClick={handleClick}>
                <PlusCircledIcon />
              </Button>
              <Modal
                onOpen={() => dispatch(generateCode())}
                trigger={
                  <Button aria-label="Generate Code">
                    <CodeIcon />
                  </Button>
                }
              >
                <SyntaxHighlighter
                  language="htmlbars"
                  showLineNumbers
                  style={nord}
                >
                  {generatedHTML}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="css" showLineNumbers style={nord}>
                  {generatedCSS}
                </SyntaxHighlighter>
              </Modal>
              <OverflowWarning />
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
