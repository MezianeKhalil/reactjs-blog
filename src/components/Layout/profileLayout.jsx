import React from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { EditProfileForm, EditPasswordForm } from '../form/_index'
import { useProfile } from '../../swrHooks/useProfile'

export default function ProfileLayout() {
  const {user, isLoadingProfile, error}= useProfile()
  return (
    <>
      <Box h="96" maxW={"5xl"} mx="auto" my="6" fontFamily={"poppins"}>
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Password</Tab>
          </TabList>
          {
            user && (
              <TabPanels>
                <TabPanel>
                  <EditProfileForm user={user?.data}/>
                </TabPanel>
                <TabPanel>
                  <EditPasswordForm user={user?.data}/>
                </TabPanel>
              </TabPanels>
            )
          }
        </Tabs>
      </Box>
    </>
  )
}