import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import dayjs, { Dayjs } from 'dayjs';

const ExpandableCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [displayedMonth, setDisplayedMonth] = useState(dayjs());
  const [collapsedHeight, setCollapsedHeight] = useState(0);
  const [collapsed, setCollapsed] = useState(true);
  const [expandedHeight, setExpandedHeight] = useState(0);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const toValue = collapsed ? collapsedHeight : expandedHeight;
    if (toValue > 0) {
      Animated.timing(animatedHeight, {
        toValue,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [collapsed, collapsedHeight, expandedHeight]);

  return (
    <View>
      {/* render invisible copy of the collapsed version (showing 1 week) */}
      <View
        style={{ position: 'absolute', opacity: 0, zIndex: -1 }}
        onLayout={(e) => {
          if (collapsedHeight === 0) {
            setCollapsedHeight(e.nativeEvent.layout.height); // measures the collapsed height
            animatedHeight.setValue(e.nativeEvent.layout.height); // set animated.value to start at collapsed height
          }
        }}
      >
        <CalendarContent
          collapsed={true}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          displayedMonth={displayedMonth}
          setDisplayedMonth={setDisplayedMonth}
        />
      </View>

      {/* render invisible copy of the expanded version (showing 1 month) */}
      <View
        style={{ position: 'absolute', opacity: 0, zIndex: -1 }}
        onLayout={(e) => {
          if (expandedHeight === 0) {
            setExpandedHeight(e.nativeEvent.layout.height); // measures the full height
          }
        }}
      >
        <CalendarContent
          collapsed={false}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          displayedMonth={displayedMonth}
          setDisplayedMonth={setDisplayedMonth}
        />
      </View>

      {/* the visible calendar */}
      <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>
        {/* render first the collapsed version*/}
        <CalendarContent
          collapsed={collapsed}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          displayedMonth={displayedMonth}
          setDisplayedMonth={setDisplayedMonth}
        />
      </Animated.View>

      <TouchableOpacity
        onPress={() => {
          setCollapsed(!collapsed);
          if (collapsed || !collapsed) {
            setDisplayedMonth(selectedDay);
          }
        }}
      >
        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          {collapsed ? 'Show full month' : 'Collapse to 1st week'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

interface CalendarContentProps {
  collapsed: boolean;
  selectedDay: Dayjs;
  setSelectedDay: (day: Dayjs) => void;
  displayedMonth: Dayjs;
  setDisplayedMonth: (month: Dayjs) => void;
}

const CalendarContent: React.FC<CalendarContentProps> = ({
  collapsed,
  selectedDay,
  setSelectedDay,
  displayedMonth,
  setDisplayedMonth,
}) => {
  const currentDate = dayjs();
  const currentMonth = displayedMonth.format('MMM YYYY');

  const startOfMonth = displayedMonth.startOf('month');
  const endOfMonth = displayedMonth.endOf('month');

  const startOfWeek = startOfMonth.startOf('week');
  const endOfWeek = endOfMonth.endOf('week');

  const weekNames = Array.from({ length: 7 }, (_, i) =>
    dayjs().day(i).format('ddd')
  );

  const getMonthDates = () => {
    const length = endOfWeek.diff(startOfWeek, 'day') + 1;
    return Array.from({ length: length }, (_, i) => startOfWeek.add(i, 'day'));
  };
  const getWeekDates = () => {
    const startOfWeek = selectedDay.startOf('week'); //Sunday
    return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, 'day'));
  };
  const weekDates = getWeekDates();
  const monthDates = getMonthDates();

  const getNextMonth = () => setDisplayedMonth(displayedMonth.add(1, 'month'));
  const getPreviousMonth = () =>
    setDisplayedMonth(displayedMonth.subtract(1, 'month'));

  const getNextWeek = () => setSelectedDay(selectedDay.add(1, 'week'));
  const getPreviousWeek = () => setSelectedDay(selectedDay.subtract(1, 'week'));

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.monthHeader}>
          <TouchableOpacity
            onPress={() => (collapsed ? getPreviousWeek() : getPreviousMonth())}
          >
            <Text>Backward</Text>
          </TouchableOpacity>

          <JumpToTodayFeature
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
            setDisplayedMonth={setDisplayedMonth}
            collapsed={collapsed}
            currentMonth={currentMonth}
          ></JumpToTodayFeature>

          <TouchableOpacity
            onPress={() => (collapsed ? getNextWeek() : getNextMonth())}
          >
            <Text>Forward</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.weekHeader}>
          {weekNames.map((day) => (
            <Text key={day} style={styles.weekName}>
              {day}
            </Text>
          ))}
        </View>

        <View style={styles.month}>
          {(collapsed ? weekDates : monthDates).map((day, dayIndex) => {
            const isSelected = selectedDay && day.isSame(selectedDay, 'day');

            return (
              <TouchableOpacity
                key={dayIndex}
                onPress={() => setSelectedDay(day)}
                style={[styles.days, isSelected && styles.highlight]}
              >
                <Text style={[day.isSame(currentDate, 'day') && styles.today]}>
                  {day.format('D')}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

interface JumpToTodayFeatureProps {
  setSelectedDay: (day: Dayjs) => void;
  selectedDay: Dayjs;
  setDisplayedMonth: (month: Dayjs) => void;
  collapsed: boolean;
  currentMonth: any;
}

const JumpToTodayFeature: React.FC<JumpToTodayFeatureProps> = ({
  setSelectedDay,
  selectedDay,
  setDisplayedMonth,
  collapsed,
  currentMonth,
}) => {
  const [hiddenTodayButton, setHiddenTodayButton] = useState(0);
  const [visibleTodayButton, setVisibleTodayButton] = useState(0);
  const [todayVisible, setTodayVisible] = useState(false);
  const animatedSlide = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const toValue = todayVisible ? visibleTodayButton : hiddenTodayButton;
    if (toValue > 0) {
      Animated.timing(animatedSlide, {
        toValue,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [hiddenTodayButton, visibleTodayButton, todayVisible]);

  useEffect(() => {
    setTodayVisible(!selectedDay.isSame(dayjs(), 'day'));
  }, [selectedDay]);

  return (
    <>
      {/* Hidden Today button */}
      <View
        style={{
          opacity: 0,
          position: 'absolute',
        }}
        onLayout={(e) => {
          if (hiddenTodayButton === 0) {
            setHiddenTodayButton(e.nativeEvent.layout.x);
            animatedSlide.setValue(e.nativeEvent.layout.x);
          }
        }}
      >
        <Text>{collapsed ? selectedDay.format('MMM YYYY') : currentMonth}</Text>

        <TouchableOpacity>
          <Text>Today</Text>
        </TouchableOpacity>
      </View>

      {/* Visible Today button */}
      <View
        style={{
          opacity: 0,
          position: 'absolute',
        }}
        onLayout={(e) => {
          if (visibleTodayButton === 0) {
            setVisibleTodayButton(e.nativeEvent.layout.x);
          }
        }}
      >
        <Text>{collapsed ? selectedDay.format('MMM YYYY') : currentMonth}</Text>

        <TouchableOpacity>
          <Text>Today</Text>
        </TouchableOpacity>
      </View>

      {/* Animation of Today button */}
      <Animated.View
        style={{
          transform: [{ translateX: animatedSlide }],
          overflow: 'hidden',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text>{collapsed ? selectedDay.format('MMM YYYY') : currentMonth}</Text>

        <TouchableOpacity
          onPress={() => {
            setSelectedDay(dayjs());
            setDisplayedMonth(dayjs());
          }}
        >
          <Text>{todayVisible && todayVisible ? 'Today' : ''}</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#fff',
    display: 'flex',
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  weekHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekName: {
    textAlign: 'center',
    width: '14.28%',
  },
  month: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  days: {
    width: '14.28%',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  today: {
    color: 'red',
    fontWeight: 'bold',
  },
  highlight: {
    backgroundColor: '#C9C3CF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExpandableCalendar;
