import React from 'react';
import Number from '../Number/Number';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { Button, NumberArrangeContainer } from './NumberArrange.styles';

const SearchBox = ({ handleSubmit, handleReset, dragNums, setDragNums }) => {
  const SortableContainer = sortableContainer(({ children }) => (
    <div className='gifs' style={{ display: 'flex'}}>{children}</div>
  ));
  const SortableElement = sortableElement(({ num }) => (
    <Number key={num} num={num} />
  ));
  const onSortEnd = ({ oldIndex, newIndex }) =>
    setDragNums(arrayMoveImmutable(dragNums, oldIndex, newIndex));

  return (
    <NumberArrangeContainer>
      <SortableContainer
        axis='x'
        onSortEnd={onSortEnd}
        onSortStart={(_, event) => event.preventDefault()}
      >
        {dragNums.map((num, i) => (
          <SortableElement index={i} key={i} num={num} />
        ))}
      </SortableContainer>
      <Button className='pv2 ph3 ma3 grow' onClick={handleSubmit}>
        REARRANGE NUMBER
      </Button>
      <Button className='pv2 ph3 ma3 grow' style={{ marginLeft: 5}} onClick={handleReset}>
        RESET
      </Button>
    </NumberArrangeContainer>
  );
};

export default SearchBox;
