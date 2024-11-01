import { FC, useContext } from 'react';
import classNames from 'classnames';

import styles from './Filters.module.scss';
import { Filter } from '../../../types';
import { LocaleContext } from '../../../utils';
import { localeSet } from '../../../consts/localisation';
import { Button } from '../../UIKit';

interface Props {
  handleFilterChange: React.MouseEventHandler<HTMLButtonElement>;
  filter: Filter;
}

export const Filters: FC<Props> = (props: Props) => {
  const { handleFilterChange, filter } = props;
  const locale = useContext(LocaleContext);
  return (
    <div className={styles.wrapper}>
      <Button
        onClick={handleFilterChange}
        data-filter="All"
        className={classNames('button', filter === 'All' && 'active')}
      >
        {localeSet[locale].all}
      </Button>
      <Button
        onClick={handleFilterChange}
        data-filter="Active"
        className={classNames('button', filter === 'Active' && 'active')}
      >
        {localeSet[locale].active}
      </Button>
      <Button
        onClick={handleFilterChange}
        data-filter="Done"
        className={classNames('button', filter === 'Done' && 'active')}
      >
        {localeSet[locale].done}
      </Button>
    </div>
  );
};
