import * as moment from 'moment';

export class TimeRangeHelper {
  public static lastDayTimeRange() {
    return {
      fromDate: moment
        .utc()
        .startOf('day')
        .subtract(1, 'day')
        .unix(),
      toDate: moment
        .utc()
        .startOf('day')
        .unix(),
    };
  }

  public static lastWeekTimeRange() {
    return {
      fromDate: moment
        .utc()
        .startOf('week')
        .subtract(1, 'week')
        .unix(),
      toDate: moment
        .utc()
        .startOf('week')
        .unix(),
    };
  }

  public static randomWeekTimeRange() {
    const start = moment.utc('2015-01-01');
    const end = moment()
      .utc()
      .startOf('day');
    const delta = end.diff(start, 'days');

    const randomDate = start.add(Math.floor(Math.random() * delta), 'days');
    return {
      fromDate: randomDate.unix(),
      toDate: randomDate.add(7, 'days').unix(),
    };
  }
}
