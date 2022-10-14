import Dropdown from '../../components/shared/Dropdown/Dropdown';
import {
    changeProperty,
    changeFlexItemProperty,
  } from '../../app/playgroundSlice';
  import {
    TabsContent,
    TabsList,
    TabsRoot,
    TabsTrigger,
  } from '../../styles/TabStyles';
  import { setActiveTab } from '../../app/playgroundSlice';
  import Slider from '../../components/shared/Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';

const PlaygroundSettings = () => {
  const { activeTab, styles, flexItems } = useSelector((state) => state.playground);
  const dispatch = useDispatch();

  console.log('PlaygroundSettings rendered');
  return (
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
                dispatch(changeProperty({ property: 'justifyContent', value }))
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
              aria-label="gap in pixels"
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
                options={['0', '1', '2', '3', '4', '5']}
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
                options={['0', '1', '2', '3', '4', '5']}
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
                aria-label="width in pixels"
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
                aria-label="height in pixels"
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
  )
}
export default PlaygroundSettings
