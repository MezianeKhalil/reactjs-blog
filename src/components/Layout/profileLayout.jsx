import React from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { EditProfileForm, EditPasswordForm } from '../form/_index'

export default function ProfileLayout() {
  
  return (
    <>
      <Box h="96" maxW={"5xl"} mx="auto" my="6" fontFamily={"poppins"}>
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Password</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <EditProfileForm/>
            </TabPanel>
            <TabPanel>
              <EditPasswordForm/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}