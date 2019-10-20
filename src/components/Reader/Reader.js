import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import publications from '../../publications.json';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import styles from './Reader.module.css';

class Reader extends Component {
  state = {
    items: 1,
  };

  componentDidMount() {
    const { location, history } = this.props;
    const parsed = queryString.parse(location.search);
    const pagest = Number(parsed.item);
    // eslint-disable-next-line no-restricted-globals
    if (pagest < 1 || pagest > publications.length || isNaN(pagest)) {
      history.replace({
        pathname: '/reader',
        search: '?item=1',
      });
    } else {
      this.setState({ items: Number(parsed.item) });
    }
  }

  handleNextPage = () => {
    const { history } = this.props;
    const { items } = this.state;
    const serchString = `?item=${items + 1}`;
    history.push({
      pathname: '/reader',
      search: serchString,
    });

    this.setState(prevState => ({
      items: prevState.items + 1,
    }));
  };

  handlePrevPage = () => {
    const { history } = this.props;
    const { items } = this.state;
    const serchString = `?item=${items - 1}`;
    history.push({
      pathname: '/reader',
      search: serchString,
    });

    this.setState(prevState => ({
      items: prevState.items - 1,
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <section className={styles.sections}>
        <div className={styles.reader}>
          <Controls
            length={publications.length}
            items={items}
            nextPage={this.handleNextPage}
            prevPage={this.handlePrevPage}
          />
          <Counter length={publications.length} items={items} />
          <Publication
            id={publications[items - 1].id}
            title={publications[items - 1].title}
            text={publications[items - 1].text}
          />
        </div>
      </section>
    );
  }
}

Reader.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Reader;
