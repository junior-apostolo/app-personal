import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/theme/colors';

interface ExpandedSectionProps {
  title: string;
  content: string;
  sectionKey: string;
  expandedSection: string | null;
  toggleExpand: (section: string) => void;
}

export const ExpandedSection: React.FC<ExpandedSectionProps> = ({ title, content, sectionKey, expandedSection, toggleExpand }) => {
  const isExpanded = expandedSection === sectionKey;

  return (
    <>
      <TouchableOpacity
        onPress={() => toggleExpand(sectionKey)}
        style={[styles.expandableItem, isExpanded && { borderBottomEndRadius: 0, borderBottomStartRadius: 0 }]}
      >
        <View style={[styles.expandableRow, isExpanded && { borderBottomEndRadius: 0, borderBottomStartRadius: 0 }]}>
          <Text style={styles.expandableText}>{title}</Text>
          <Ionicons
            name={isExpanded ? 'chevron-down' : 'chevron-forward'}
            size={20}
            color={colors.white}
          />
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.expandableRowContent}>
          <Text style={styles.expandedText}>
            {content}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  expandableItem: {
    width: '100%',
    paddingVertical: 10,
  },
  expandableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: colors.blue_750,
    borderRadius: 20,
    height: 70,
    alignSelf: 'center',
  },
  expandableText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 20,
  },
  expandedText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'justify',
    paddingHorizontal: 15,
  },
  expandableRowContent: {
    backgroundColor: colors.blue_750,
    marginTop: -10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomWidth: 4,
    borderBottomColor: colors.green_100,
    paddingBottom: 20,
    marginBottom: 10,
    width: "100%"
  },
});
