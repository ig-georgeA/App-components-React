import { IgrAvatar, IgrButton, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrList, IgrListHeader, IgrListItem } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EmployeeDto } from '../models/NorthwindAPIIG/employee-dto';
import { useGetEmployeeDtoList } from '../hooks/northwind-apiig-hooks';
import styles from './lists-data.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function ListsData() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const [listSelectedItem, setListSelectedItem] = useState<string | undefined>();
  const [listSelectedItem1, setListSelectedItem1] = useState<string | undefined>();
  const [listSelectedItem2, setListSelectedItem2] = useState<EmployeeDto | undefined>();
  const [listSelectedItem3, setListSelectedItem3] = useState<EmployeeDto | undefined>();
  const { northwindAPIIGEmployeeDto } = useGetEmployeeDtoList();

  function clickGroup(item: EmployeeDto) {
    setListSelectedItem1('1');
    setListSelectedItem2(item);
  }

  return (
    <>
      <div className={classes("column-layout lists-data-container")}>
        <div className={classes("row-layout group")}>
          {northwindAPIIGEmployeeDto?.map((item) => (
            <IgrCard className={classes("card")} key={uuid()}>
              <div className={classes("group_1")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span>{item.lastName}</span>
                  </h3>
                  <h5 slot="subtitle">
                    <span>{item.title}</span>
                  </h5>
                </IgrCardHeader>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" onClick={() => navigate(`/layouts`)} className={classes("button")}>
                      <span>Details</span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </div>
              <IgrCardMedia className={classes("media-content")}>
                <img src={item.avatarUrl} alt="" className={classes("image")} />
              </IgrCardMedia>
            </IgrCard>
          ))}
        </div>
        <div className={classes("row-layout group_2")}>
          <IgrList className={classes("list")}>
            <IgrListHeader>
              <div>Small list</div>
            </IgrListHeader>
            <div style={{ display: 'contents' }} onClick={() => setListSelectedItem('1')}>
              <IgrListItem selected={listSelectedItem != null && listSelectedItem === '1'}>
                <div slot="start">
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")}>
                      <span>home</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title">Home</div>
              </IgrListItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => setListSelectedItem('2')}>
              <IgrListItem selected={listSelectedItem != null && listSelectedItem === '2'}>
                <div slot="start">
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")}>
                      <span>business</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title">Accounts</div>
              </IgrListItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => setListSelectedItem('3')}>
              <IgrListItem selected={listSelectedItem != null && listSelectedItem === '3'}>
                <div slot="start">
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")}>
                      <span>person_outline</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title">Contacts</div>
              </IgrListItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => setListSelectedItem('4')}>
              <IgrListItem selected={listSelectedItem != null && listSelectedItem === '4'}>
                <div slot="start">
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")}>
                      <span>inbox</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title">Contracts</div>
              </IgrListItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => setListSelectedItem('5')}>
              <IgrListItem selected={listSelectedItem != null && listSelectedItem === '5'}>
                <div slot="start">
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")}>
                      <span>bar_chart</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title">Reports</div>
              </IgrListItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => setListSelectedItem('6')}>
              <IgrListItem selected={listSelectedItem != null && listSelectedItem === '6'}>
                <div slot="start">
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")}>
                      <span>calendar_today</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title">Calendar</div>
              </IgrListItem>
            </div>
            <div style={{ display: 'contents' }} onClick={() => setListSelectedItem('7')}>
              <IgrListItem selected={listSelectedItem != null && listSelectedItem === '7'}>
                <div slot="start">
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")}>
                      <span>assignment_turned_in</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title">Tasks</div>
              </IgrListItem>
            </div>
          </IgrList>
          <div className={classes("column-layout group_3")}>
            <IgrList className={classes("list_1")}>
              <IgrListHeader>
                <div>Medium list</div>
              </IgrListHeader>
              {northwindAPIIGEmployeeDto?.map((item) => (
                <div style={{ display: 'contents' }} onClick={() => clickGroup(item)} key={uuid()}>
                  <IgrListItem selected={listSelectedItem2 != null && listSelectedItem2 === item && listSelectedItem1 != null && listSelectedItem1 === '1'}>
                    <div slot="start">
                      <IgrAvatar src={item.avatarUrl ?? ""} shape="circle" className={classes("avatar_1")}></IgrAvatar>
                    </div>
                    <div slot="title">{item.lastName}</div>
                    <div slot="subtitle">{item.title}</div>
                    <span slot="end" className={classes("material-icons icon")}>
                      <span>arrow_forward</span>
                    </span>
                  </IgrListItem>
                </div>
              ))}
            </IgrList>
          </div>
          <div className={classes("column-layout group_4")}>
            <IgrList className={classes("list_2")}>
              {northwindAPIIGEmployeeDto?.map((item) => (
                <div style={{ display: 'contents' }} onClick={() => setListSelectedItem3(item)} key={uuid()}>
                  <IgrListItem selected={listSelectedItem3 != null && listSelectedItem3 === item}>
                    <div slot="start">
                      <IgrAvatar src={item.avatarUrl ?? ""} className={classes("avatar_1")}></IgrAvatar>
                    </div>
                    <div slot="title">{item.lastName}</div>
                    <div slot="subtitle">{item.title}</div>
                    <div>
                      <div className={classes("row-layout group_5")}>
                        <div className={classes("column-layout group_6")}>
                          <p className={classes("typography__caption text")}>
                            <span>Birthday</span>
                          </p>
                          <p className={classes("typography__caption text_1")}>
                            <span>{item.birthDate?.toString()}</span>
                          </p>
                        </div>
                        <div className={classes("column-layout group_6")}>
                          <p className={classes("typography__caption text")}>
                            <span>Hire date</span>
                          </p>
                          <p className={classes("typography__caption text_1")}>
                            <span>{item.hireDate?.toString()}</span>
                          </p>
                        </div>
                        <div className={classes("column-layout group_6")}>
                          <p className={classes("typography__caption text")}>
                            <span>Profile</span>
                          </p>
                          <a href="https://appbuilder.dev" target="_blank" className={classes("typography__caption hyperlink")}>
                            <span>edit</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </IgrListItem>
                </div>
              ))}
            </IgrList>
          </div>
        </div>
      </div>
    </>
  );
}
