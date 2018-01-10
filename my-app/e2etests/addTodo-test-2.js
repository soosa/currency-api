/* global expect, it, describe, jest */
import { shallow, mount } from 'enzyme';

describe('AddTodo component', () => {
  describe('Add todo button', () => {
    it('Should call the submitTodo function when clicked', () => {
      const submitMock = jest.fn();
      const component = mount(<AddTodo submitTodo={submitMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});
