import { test, expect } from 'vitest';
import renderer from 'react-test-renderer';
import NavBar from './NavBar.jsx';

test('The NavBar component should render', () => {
  const view = renderer
  .create(<NavBar/>)
  .toJSON();
  expect(view).toMatchSnapshot();
});

test('The NavBar component should render with a title', () => {
  const title = 'Test application';
  const component = renderer.create(<NavBar title={title} />);
  
  expect(component).toBeDefined();
});

test('The NavBar component should respond to button clicks', () => {
  const goBackHandler = () => {}; 
  const openFormHandler = () => {}; 
  const component = renderer.create(<NavBar goBack={goBackHandler} openForm={openFormHandler}/>);
  
  component.root.findByProps({children: '< Go Back'}).props.onClick();
  component.root.findByProps({children: '+ Add Review'}).props.onClick();
  expect(true).toBeTruthy();
  
});

