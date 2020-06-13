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
}
