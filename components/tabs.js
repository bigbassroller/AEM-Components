import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

if (typeof navigator !== 'undefined') {
  require('codemirror/lib/codemirror.css');
  require('codemirror/theme/material.css');
  require('codemirror/theme/neat.css');
  require('codemirror/mode/xml/xml.js');
  require('codemirror/mode/htmlmixed/htmlmixed.js');
  require('codemirror/mode/yaml/yaml.js');
  require('codemirror/mode/css/css.js');
  require('codemirror/mode/javascript/javascript.js');
}
import {UnControlled as CodeMirror} from 'react-codemirror2'
import beautify from 'js-beautify'

export default function MyTabs({
properties,
markup,
json,
postcss,
css
}) {

  const prettyJson = beautify(json, { indent_size: 2, space_in_empty_paren: true });

  return (
    <Tabs>
      <TabList>
        <Tab>Properties</Tab>
        <Tab>Markup</Tab>
        <Tab>JSON</Tab>
        <Tab>PostCSS</Tab>
        <Tab>CSS</Tab>
      </TabList>
      <TabPanel>
        <CodeMirror
          value={properties}
          options={{
            mode: 'yaml',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
          }}
        />
      </TabPanel>
      <TabPanel>
       <CodeMirror
          value={markup}
          options={{
            mode: 'htmlmixed',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
          }}
        />
      </TabPanel>
      <TabPanel>
        <CodeMirror
          value={prettyJson}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
          }}
        />
      </TabPanel>
      <TabPanel>
        <CodeMirror
          value={postcss}
          options={{
            mode: 'css',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
          }}
        />
      </TabPanel>
      <TabPanel>
        <CodeMirror
          value={css}
          options={{
            mode: 'css',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
          }}
        />
      </TabPanel>
    </Tabs>
  )
}

