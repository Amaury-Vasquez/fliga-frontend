import type { Meta, StoryObj } from "@storybook/react";
import Table from ".";

const meta = {
  title: "Components/Table",
  tags: ["autodocs"],
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;
// id	first_name	last_name	email	gender	ip_address
const TemplateHeaders = [
  "id",
  "first_name",
  "last_name",
  "email_gender",
  "ip_address",
];
const TemplateData = [
  ["Karleen", "Amorine", "kamorine0@skyrock.com", "Female", "122.91.12.22"],
  // Kit			Male
  [
    "Kit",
    "Hindenberger",
    "khindenberger1@china.com.cn",
    "Male",
    "63.108.32.125",
  ],
  ["Liam", "Rumens", "lrumens2@ebay.com", "Male", "79.76.19.246"],
  ["Roselia", "Corrin", "rcorrin3@360.cn", "Female", "20.47.124.99"],
];

export const Base: Story = {
  args: {
    zebra: true,
    size: "md",
    activeRow: 1,
    countRows: false,
    hoverEffect: true,
    headers: TemplateHeaders,
    data: TemplateData,
  },
};
