import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import { Scheme } from '@/constants/globalStyles';
import { SVG } from './svgs/SVG';
import EmptyView from './EmptyView';
import { CheckMarkSVG } from './svgs/SVGStash';

interface Props {
    checked: boolean;
    onPress: (checked: boolean) => void;
}

const CheckBox: React.FC<Props> = ({ checked, onPress }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const onPressCallback = useCallback(() => { onPress(!isChecked); setIsChecked(!isChecked); }, [onPress, isChecked]);

    return (
        <TouchableOpacity onPress={onPressCallback}>
            {isChecked ? <CheckMarkSVG/> : <EmptyView/>}
        </TouchableOpacity>
    );
};

export default CheckBox;