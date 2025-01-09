import { Dropdown } from '@renderer/shared/ui';

export const HomePage = () => {
  return (
    <div>
      <Dropdown target={<div>наводка</div>}>
        <div>пункт 1</div>
        <div>пункт 2</div>
        <div>пункт 3</div>
      </Dropdown>
    </div>
  );
};
