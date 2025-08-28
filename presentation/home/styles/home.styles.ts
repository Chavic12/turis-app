import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  greetingSection: {
    marginLeft: 12,
  },
  greeting: {
    fontSize: 14,
    opacity: 0.7,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
  },
  headerActions: {
    flexDirection: "row",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 20,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export const bannerStyles = StyleSheet.create({
  bannerSection: {
    marginVertical: 20,
  },
  bannerItem: {
    width: SCREEN_WIDTH - 40,
    marginHorizontal: 20,
  },
  bannerCard: {
    borderRadius: 16,
    overflow: "hidden",
  },
  bannerImage: {
    height: 160,
  },
  bannerContent: {
    padding: 16,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 14,
    opacity: 0.8,
  },
});

export const categoryStyles = StyleSheet.create({
  categoriesSection: {
    marginBottom: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 8,
    padding: 12,
    borderRadius: 16,
    borderWidth: 2,
    minWidth: 80,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 20,
  },
  categoryName: {
    fontSize: 12,
    textAlign: "center",
  },
});

export const featuredEventStyles = StyleSheet.create({
  featuredSection: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  eventCard: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
  },
  eventImage: {
    height: 180,
  },
  eventContent: {
    padding: 16,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
    marginRight: 8,
  },
  eventDetails: {
    gap: 4,
  },
  eventDetailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -8,
  },
  eventDetailText: {
    fontSize: 14,
    marginLeft: -8,
  },
  eventActions: {
    padding: 16,
    paddingTop: 0,
  },
  joinButton: {
    borderRadius: 25,
  },
});

export const popularEventStyles = StyleSheet.create({
  popularSection: {
    marginBottom: 30,
  },
  popularContainer: {
    paddingHorizontal: 16,
  },
  popularEventItem: {
    marginHorizontal: 8,
    width: 200,
  },
  popularCard: {
    borderRadius: 12,
    overflow: "hidden",
  },
  popularImage: {
    height: 120,
  },
  popularContent: {
    padding: 12,
  },
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  popularTitle: {
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
    marginRight: 4,
  },
  popularDate: {
    fontSize: 12,
    marginBottom: 8,
  },
  popularStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -8,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "600",
    marginLeft: -8,
  },
  attendeesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -8,
  },
  attendeesText: {
    fontSize: 12,
    marginLeft: -8,
  },
});
